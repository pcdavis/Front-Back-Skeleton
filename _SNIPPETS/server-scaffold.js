var express = require('../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/express');
var bodyParser = require('../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/body-parser');
var cors = require('../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/cors');

var app = express();
app.use(bodyParser.json());

var port = 3000;

app.get('/incidents', function(req, res) {
  console.log('GET sighting');
});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
