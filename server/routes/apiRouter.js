const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/vacancies', async (req, res) => {
  try {
    const contents = fs.readFileSync('../server/parsing/vacancies.json');
    const jsonContent = JSON.parse(contents);
    res.json(jsonContent.source.vacancies);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
