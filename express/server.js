const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const cors = require('cors')

let productos = [
   {
    isActive: true,
    product_name: "Papitas",
    description: "Papitas con chile",
    price: 16,
    category: "Comida",
    brand: "Sasbritas",
    _id: "5fbc19a65a3f794d72471163",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image:
      "https://lacasa33.com/ve/img/inventory/910367/910367p1.jpg",
  },
];

const app = express();
 
const router = express.Router();
router.get('/', (req, res) => res.send({"hola": "hola"}));
router.get('/productos', (req, res) => res.send(productos));

app.use(cors());
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
