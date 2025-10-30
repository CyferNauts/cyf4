const express = require('express');
const router = express.Router();

// POST /api/verify-code
router.post('/verify-code', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Access code is required' });
  }

  const correctCode = process.env.RESOURCE_ACCESS_CODE;

  if (!correctCode) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  if (code === correctCode) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid access code' });
  }
});

module.exports = router;
