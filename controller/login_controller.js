const User = require('../models/schemas/user_schema');
const Role = require('../models/schemas/role');
const Clinic = require('../models/schemas/clinic');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const createToken = (id)=>{
    return jwt.sign({id},'test123',{expiresIn:3*24*60*60*30});
};


const signup = async (req, res) => {
    try {

        const password = req.body.password;

        if (!password) {
            return res.status(400).send({ error: "Password is required" });
        };

        const hash = await bcrypt.hash(password, 10);

        req.body.password = hash;

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            role: new mongoose.Types.ObjectId('651c6babcde19ef9e2901b1f')
        });

        if (user) {
            res.send(user);
        } else {
            res.send({ error: 'Unable to signup!' });
        };

    } catch (e) {
        res.send(e.message);
    };
};

const getLogin = async (req, res) => {
    res.render('credentials/login');
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            // Check if the password is correct
            const verify = await bcrypt.compare(password, user.password);

            if (verify === true) {
                const id = user._id;
                const token = createToken(id);
                res.cookie('token', token,{httpOnly:true,maxAge:3*24*60*60*30});

                const roleId = user.role;

                // Retrieve the role from the database
                const role = await Role.findById(roleId);

                if (!role) {
                    // Handle the case where no role is found
                    res.send("User has no assigned role");
                    return;
                };

                if (role.roleName === 'Superadmin') {
                    // Handle Superadmin
                    res.send(user);
                } else if (role.roleName === 'Clinic') {
                    // Handle Clinic
                    res.send(user);
                } else if (role.roleName === 'Doctor') {
                    // Handle Clinic
                    res.send(user);
                } else if (role.roleName === 'Patient') {
                    // Handle Patient
                    res.send(user);
                };
            } else {
                res.send("Incorrect email or password");
            };
        } else {
            res.send("User not found");
        };
    } catch (e) {
        res.send(e.message);
    };
};



module.exports = {
    signup,
    login,
    getLogin
};