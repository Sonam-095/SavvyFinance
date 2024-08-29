const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
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
        next();
    } catch (error) {
        next(error);
    } 
} );


userschema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password, this.password);
}


// json web token
userschema.methods.generatetoken = async function () {
    try {
        return jwt.sign({
            userId: this._id,
            email: this.email,
            isAdmin:this.isAdmin,
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