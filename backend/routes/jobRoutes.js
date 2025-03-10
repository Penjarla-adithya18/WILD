const express = require('express');
const Job = require('../models/job');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ error: 'Error creating job' });
  }
});

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching jobs' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: 'Job not found' });
  }
});

module.exports = router;
