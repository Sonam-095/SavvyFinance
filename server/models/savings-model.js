const { Schema, model,} = require("mongoose");

const savingschema = new Schema({
    description:{ type:String, require:true, },
    saved:{ type:String, require:true, },
    target:{ type:String, require:true, },
});

const Savings = new model("Savings", savingschema);

module.exports = Savings;