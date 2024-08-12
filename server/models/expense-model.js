const { Schema, model,} = require("mongoose");

const expenseschema = new Schema({
    description:{ type:String, require:true, },
    category:{ type:String, require:true, },
    amount:{ type:String, require:true, },
});

const Expense = new model("Expense", expenseschema);

module.exports = Expense;