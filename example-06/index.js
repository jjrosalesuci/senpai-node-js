/*
 * Senpai NodeJS 
 * Ejemplo 06
 */
const https = require('https');
const fs = require('fs');

const https_options = {
    host: "api.randomuser.me",
    path: "/?nat=US&results=5",
    method: 'GET',
    headers: {
    	'Content-type': 'application/json'
    }
};

const request = https.request(https_options, (response) => {

    if(response.statusCode !== 200) {
        throw new Error("Response not 200");
    } else {

        let item = "";

        response.on('data', (chunk) => {
            item += chunk;
        });

        response.on('end', () => {
            fs.writeFile('output.json', item, (err) => {
                if(err) {
                    return console.log(err);
                }

                console.log("Sites > output.json");
            })
        })
    }
});

request.on('error', (err) => {
	throw err;
});

request.end();