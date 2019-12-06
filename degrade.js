#!/usr/bin/env node
const fs = require('fs');
const ezrand = require('@remibutler/easyrandom');
const jpeg = require('jpeg-js');

const filePath = process.argv[2];
const corruptionAmmount = process.argv[3] || 25;

if (filePath === undefined || filePath === 'help' || filePath === 'h' || filePath === '-h') {
  console.log('call degrade like:');
  console.log('   ./degrade.js path/to/file number-of-times-to-resave');
  console.log('the higher the number the more degraded the file will be (higher numbers are better)');
  console.log('if we wanted to degrade the example we would use');
  console.log('  ./degrade.js ./example.jpg 80');
  process.exit(1);
}

let file = fs.readFileSync(filePath);
let num = parseInt(corruptionAmmount);

console.log('starting file degrading...');
while(num > 0) {
  let rawImageData = jpeg.decode(file);
  let jpegData = jpeg.encode(rawImageData, 100);
  fs.writeFileSync('degradedFile.jpeg', jpegData.data);
  file = fs.readFileSync('degradedFile.jpeg', );
  num--;
}
console.log('done!');
