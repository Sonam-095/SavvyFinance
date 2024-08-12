const express = require("express");
const router = express.Router();
const Income = require("../models/income-model");


router.get('/', async (req, res) => {
  try {
      const income = await Income.find(); // Fetch all data from the database
      res.json(income); // Send data as JSON
  } catch (error) {
      res.status(500).json({ message: 'Error fetching income' });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newincomebody = req.body;
    const newincome = new Income(newincomebody);
    const savedincome = await newincome.save();

    res.status(200).send(savedincome);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newincomebody = req.body;
    const income = await Income.findByIdAndUpdate(
      id,
      newincomebody,
      { new: true }
    );

    if (!income) return res.status(404).send();

    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const income = await Income.findByIdAndDelete(id);
    if (!income) return res.status(404).send('income not found');
    res.status(200).send(income);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
