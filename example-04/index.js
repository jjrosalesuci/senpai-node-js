/*
 * Senpai NodeJS 
 * Ejemplo 04
 */
 const fs = require('fs');

 // Lectura de archivo asincrónica
 fs.readFile('resource.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Letura de archivo con éxito');
    console.log(data);
  });

// Escritura de archivo asincrónica
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('Escritura de archivo con éxito');
});

// Creación asincrónica de una carpeta
fs.mkdir('./tmp/folder', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Creación de carpeta exitosa');
});