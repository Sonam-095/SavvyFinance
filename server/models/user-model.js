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

userschema.pre("save", async function(next) {
    const user = this;

    if(!user.isModified("password")) {
        next();
    }

    try {
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltround);
        user.password = hash_password;
    } catch (error) {
        next(error);
    } 
} );


// json web token
userschema.methods.generatetoken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isadmin:this.isadmin,
        },
    process.env.JWT_MY_KEY,
    {
        expiresIn: "30d",
    }
    );
    } catch (error) {
        console.error(error);
        
    }
};

const User = new mongoose.model("User", userschema);

module.exports = User;