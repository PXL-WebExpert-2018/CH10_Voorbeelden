// Een eenvoudige webserver.

// 0. initialisatie en variabelen
const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    root = __dirname + '/public/'; // magic variable

// 1. Maak de webserver
let server = http.createServer(function (req, res) {
    // 1a. Check of de root wordt opgevraagd.
    let fileName = '';
    let url = req.url;
    if (url === '/') {
        url = 'index.html'; // redirect als geen bestandsnaam is opgegeven
    }
    fileName = root + url;
    console.log('Gevraagd bestand: ', path.basename(fileName));

    // 1b. Check of bestand bestaat.
    fs.access(fileName, fs.F_OK, function (err) {
        if (err) {
            fileName = root + '404.html'; // nee
            serveFile(fileName);
        } else {
            serveFile(fileName); // ja.
        }
    });

    // 1c. Serveer gevraagde bestand.
    function serveFile(requestFile) {
        // 2. Maak een stream en server op basis van Events
        let stream = fs.createReadStream(requestFile);
        stream.on('data', function (chunk) {
            res.write(chunk);
        });
        stream.on('end', function () {
            res.end();
        });
        stream.on('error', function (err) {
            console.log('error: ' + err);
        });
    }
});

// 2. Start de server
server.listen(3000);
console.log('Server gestart op http://localhost:3000');
