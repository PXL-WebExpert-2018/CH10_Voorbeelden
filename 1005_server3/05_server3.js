// De http-headers van het inkomende request tonen in de console.
const http = require('http');
let server = http.createServer(function (request, response) {
	console.log(request.headers);
	//console.log(request.headers['user-agent']); // één specifieke header tonen
	let url = request.url;
	response.writeHead(200, {'Content-Type':'text/html'});
	response.write('<h1>De gevraagde URL: ' + url + '</h1>');
	response.end();
});
server.listen(3000); // server starten
console.log('Server gestart op http://localhost:3000 ...');