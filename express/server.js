const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
 
app.use('/', (req, res) => res.send({"mesage": 'hola'}));

module.exports = app;
module.exports.handler = serverless(app);
