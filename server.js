const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies

app.post('/', function(req, res) {
    var meta_data = req.body.meta;
    console.log("meta: " + meta_data);
    console.log(req.body);
    res.send(req.body);
    // ...
});

app.listen(3001, () => console.log('Listening on 3001'));
