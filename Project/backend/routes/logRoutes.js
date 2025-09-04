const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

// GET all logs
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new log
router.post('/', async (req, res) => {
  const { date, mood, notes } = req.body;

  const newLog = new Log({ date, mood, notes });
  try {
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
