const { Schema, model,} = require("mongoose");

const budgetschema = new Schema({
    description:{ type:String, require:true, },
    budget:{ type:String, require:true, },
    spent:{ type:String, require:true, },
});

const Budget = new model("Budget", budgetschema);

module.exports = Budget;