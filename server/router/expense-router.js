const express = require("express");
const router = express.Router();
const Expense = require("../models/expense-model");


router.get('/:userId', async (req, res) => {
  try {
    const userId = req.user._id; 
    const expense = await Expense.find({ userId });
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

// router.get('/', async (req, res) => {
//   try {
//       const expense = await Expense.find(); // Fetch all data from the database
//       res.json(expense); // Send data as JSON
//   } catch (error) {
//       res.status(500).json({ message: 'Error fetching expenses' });
//   }
// });

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newexpensebody = req.body;
    const newexpense = new Expense(newexpensebody);
    const savedexpense = await newexpense.save();

    res.status(200).send(savedexpense);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newexpensebody = req.body;
    const expense = await Expense.findByIdAndUpdate(
      id,
      newexpensebody,
      { new: true }
    );

    if (!expense) return res.status(404).send();

    res.status(200).send(expense);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const expense = await Expense.findByIdAndDelete(id);
    if (!expense) return res.status(404).send('expense not found');
    res.status(200).send(expense);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
