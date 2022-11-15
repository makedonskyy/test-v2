const fs = require('fs');

const contents = fs.readFileSync('../server/parsing/vacancies.json');
// Define to JSON type
const jsonContent = JSON.parse(contents);
console.log(jsonContent.source.vacancies);
