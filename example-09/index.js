/*
 * Senpai NodeJS 
 * Ejemplo 09
 */
const express = require('express');
const app = express();

app.get('/users', function(request, response) {
	response.send("Llegó a " + request.originalUrl);
});

app.get('/*', function(request, response) {
	response.send("Mi aplicación funciona!");
});

app.listen(3000, function() {
	console.log("App corriendo en el puerto 3000");
});
