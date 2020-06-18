const express = require('express');
const router = require('./routes/routes.js');
const port = 3000;
const db = require('../database/index.js');
const app = express();

//Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Logging and parsing
app.use(morgan('dev'));
app.use(bodyParser.json());

// Serve the client files
app.use(express.static(__dirname + '/../dist'));

//Router
app.use('/', router);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
