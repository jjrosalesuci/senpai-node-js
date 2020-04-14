/*
 * Senpai NodeJS 
 * Ejemplo 08
 */
const express = require('express');
const app = express();

app.get('/', function(request, response) {
	response.send("Mi aplicación funciona!");
});

app.listen(3000, function() {
	console.log("App corriendo en el puerto 3000");
});
