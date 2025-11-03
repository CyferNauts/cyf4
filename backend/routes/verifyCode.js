const express = require('express');
const router = express.Router();

// List of valid access codes
const validCodes = [
  'CN69417',
  'CN67691',
  'CN41679',
  'CN69741',
  'CN67419',
  'CN41697',
  'CN69147',
  'CN67941',
  'CN41696',
  'CN69714',
  'CN67416',
  'CN69416',
  'CN41674',
  'CN67694',
  'CN69176',
  'CN69769',
  'CN67467',
  'CN41641',
  'CN69467',
  'CN67967',
  'CN41676',
  'CN67641',
  'CN69169',
  'CN69767'
];

// POST /api/verify-code
router.post('/verify-code', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Access code is required' });
  }

  if (validCodes.includes(code)) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid access code' });
  }
});

module.exports = router;
