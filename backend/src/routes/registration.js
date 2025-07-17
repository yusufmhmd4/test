// routes/registration.js
const express = require('express');
const router = express.Router();
const Registration = require('../models/registration.model');

router.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).send(registration);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
