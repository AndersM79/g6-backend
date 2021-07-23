const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

let productos = [{ name: "papitas" }, { name: "agua" }];

const app = express();
 
const router = express.Router();
router.get('/', (req, res) => res.send({"hola": "hola"}));
router.get('/productos', (req, res) => res.send(productos);

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
