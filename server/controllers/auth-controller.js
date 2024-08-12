const User = require ("../models/user-model");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");

// home logic

const home = async (req, res) => {
    try {
        res.status(200).send('home by controller');
    } catch (error) {
        console.log(error);
    }
};

// signup logic

const signup = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        const userexist = await User.findOne({ email });

        if(userexist) {
            return res.status(400).json({msg: "email already exists"})
        }

        // hash the password
        const saltround = 10;
        const hash_password = await bcrypt.hash(password, saltround);

        const usercreated = await User.create ({ email, password: hash_password, });

        res.status(200).send({ msg : usercreated, token: await usercreated.generatetoken(), userid:usercreated._id.toString(), });
    } catch (error) {
        // res.status(500).json("internal server error");
        next(error);
    }
};

// login logic

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userexist = await User.findOne({ email });

        if(!userexist){
            return res.status(400).json({message: "Invalid credentials" });
        }

        const user = await bcrypt.compare(password, userexist.password);

        if(user) {
            res.status(200).send({ msg : "login succesful", token: await userexist.generatetoken(), userid:userexist._id.toString(), });
        }
        else {
            res.status(401).json({message: "invalid email or password"})
        }

    } catch (error) {
        res.status(500).json("internal server error");
    }
};

module.exports = { home, signup, login };