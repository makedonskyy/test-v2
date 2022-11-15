const fs = require('fs');
const xml2js = require('xml2js');
// const util = require('util');

const parser = new xml2js.Parser();

fs.readFile('example_1.xml', (error, data) => {
  parser.parseString(data, (err, result) => {
    if (err) {
      throw err;
    }
    const json = JSON.stringify(result, null, 4);
    fs.writeFileSync('test.json', json);
  });
});
