/*
 * Senpai NodeJS 
 * Desafio 01
 */
const fs = require('fs');
const https = require('https');

https.get('https://raw.githubusercontent.com/ggismero/senpai-nodejs/master/example-03/resource.json', res => res.pipe(fs.createWriteStream('./resource2.json')));