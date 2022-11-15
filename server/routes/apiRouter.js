const axios = require('axios');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const a = 'myaw'
    console.log(a);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;
