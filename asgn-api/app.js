let express = require('express')
let app = express();
let routes = require('./asgn-router');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = 4040;

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost/asgn-api', {
    useNewUrlParser: true
});
var db = mongoose.connection;

if (!db) {
    console.log("error connecting to database")
} else {
    console.log("database conntected successfully")
}

app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running asgn-api on port " + port);
});