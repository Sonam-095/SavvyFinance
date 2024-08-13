const express = require("express");
const router = express.Router();
const Savings = require("../models/savings-model");

router.get('/', async (req, res) => {
  try {
      const saving = await Savings.find(); // Fetch all data from the database
      res.json(saving); // Send data as JSON
  } catch (error) {
      res.status(500).json({ message: 'Error fetching saving' });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newsavingbody = req.body;
    const newsaving = new Savings(newsavingbody);
    const savedsaving = await newsaving.save();

    res.status(200).send(savedsaving);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
    
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newsavingbody = req.body;
    const saving = await Savings.findByIdAndUpdate(
      id,
      newsavingbody,
      { new: true }
    );

    if (!saving) return res.status(404).send();

    res.status(200).send(saving);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const saving = await Savings.findByIdAndDelete(id);
    if (!saving) return res.status(404).send('saving not found');
    res.status(200).send(saving);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
