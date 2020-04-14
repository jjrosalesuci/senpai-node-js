/*
 * Senpai NodeJS 
 * Ejemplo 02
 */
const fs = require('fs');

const stream = fs.createReadStream('./resource.json');

let data = '';

stream.on('data', (chunk) => {
  console.log(chunk);
  data += chunk;
});

stream.on('end', () => {
  console.log('finished');
  console.log(data);
});

