const express = require("express");
const router = express.Router();
const Budget = require("../models/budget-model");


router.get('/:userId', async (req, res) => {
  try {
    const userId = req.user._id; 
    const budget = await Budget.find({ userId });
    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching budgets' });
  }
});

// router.get('/', async (req, res) => {
//   try {
//       const budget = await Budget.find(); // Fetch all data from the database
//       res.json(budget); // Send data as JSON
//   } catch (error) {
//       res.status(500).json({ message: 'Error fetching budget' });
//   }
// });

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newbudgetbody = req.body;
    const newbudget = new Budget(newbudgetbody);
    const savedbudget = await newbudget.save();

    res.status(200).send(savedbudget);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newbudgetbody = req.body;
    const budget = await Budget.findByIdAndUpdate(
      id,
      newbudgetbody,
      { new: true }
    );

    if (!budget) return res.status(404).send();

    res.status(200).send(budget);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const budget = await Budget.findByIdAndDelete(id);
    if (!budget) return res.status(404).send('budget not found');
    res.status(200).send(budget);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
