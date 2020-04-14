/*
 * Senpai NodeJS 
 * Ejemplo 03
 */
const fs = require('fs');

const stream = fs.createReadStream('./resource.json');

var writeStream = fs.createWriteStream('./output.json');

stream.pipe(writeStream);
