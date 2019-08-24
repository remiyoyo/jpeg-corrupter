#!/usr/bin/env node
const fs = require('fs');
const ezrand = require('@remibutler/easyrandom');

const filePath = process.argv[2];
const corruptionAmmount = process.argv[3] || 4;

if (filePath === undefined || filePath === 'help' || filePath === 'h' || filePath === '-h') {
  console.log('call this app like:');
  console.log('   ./corrupt.js path/to/file 0-9');
  console.log('the lower the number the higher the corruption, between 0 and 9');
  console.log('if we wanted to corrupt the example we would use');
  console.log('  ./corrupt.js ./example.jpg 2');
  process.exit(1);
}

const file = fs.readFileSync(filePath);
const length = file.length;

let numbCorrupted = 0;

for (let i = 100; i < length; i++) {
  let willCorrupt = ezrand.getMax(1000000) > (999990 + parseInt(corruptionAmmount, 10));

  if (willCorrupt) {
    file[i] = (ezrand.flipACoin()) ? i + ezrand.getMax(10) : i - ezrand.getMax(10);
    numbCorrupted++;
  }
}

fs.writeFileSync('corruptedFile.jpg', file);
console.log('number of corrupted hex = ' + numbCorrupted);
console.log('done!');
