const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(400).json({ error: 'Error submitting application' });
  }
});

router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().populate('job').populate('candidate');
    res.json(applications);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching applications' });
  }
});

module.exports = router;
