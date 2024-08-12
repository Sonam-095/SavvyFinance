const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
});

// json web token
userschema.methods.generatetoken = async function () {
    try {
        return jwt.sign({
            userid: this._id.toString(),
            email: this.email,
            isasmin:this.isadmin,
        },
    process.env.JWT_MY_KEY,
    {
        expiresin: "30d",
    }
    );
    } catch (error) {
        console.error(error);
        
    }
};

const User = new mongoose.model("User", userschema);

module.exports = User;