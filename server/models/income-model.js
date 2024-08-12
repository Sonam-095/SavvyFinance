const { Schema, model,} = require("mongoose");

const incomeschema = new Schema({
    description:{ type:String, require:true, },
    category:{ type:String, require:true, },
    amount:{ type:String, require:true, },
});

const Income = new model("Income", incomeschema);

module.exports = Income;