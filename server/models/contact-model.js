const { Schema, model,} = require("mongoose");

const contactschema = new Schema({
    mobileNumber:{ type:String, require:true, },
    email:{ type:String, require:true, },
    subject:{ type:String, require:true, },
    details:{ type:String, require:true, },
    uploadImage:{ type:String,},
});

const Contact = new model("Contact", contactschema);

module.exports = Contact;