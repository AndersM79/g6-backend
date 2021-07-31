// PASO 1:  importar las dependencias o paquetes a utilizar
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cors = require("cors");
const datos = require("./productos.json");

// PASO 1.1: definir constantes y datos iniciales
let productos = datos.productos;

// PASO 2: Generas una aplicacion de express
const app = express();

// PASO3: se define una sub aplicacion de express con sus respectivas rutas.
const router = express.Router();
router.get("/", (req, res) => res.send({ hola: "hola" }));
router.get("/productos", (req, res) => res.send(productos));

// -- Inicia Ejemplo
// app
//    1. router
//        1.1  /   ---- > /.netlify/functions/server
//        1.2 /productos ---- > /.netlify/functions/server/productos
//    2. /
// app.get("/") ----> 2
// -- Fin ejemplo

// PASO 4: incluye funcionalidades que express no trae por defecto
app.use(cors());
app.use(bodyParser.json());
app.use("/.netlify/functions/test", router); // path must route to lambda

// PASO 5: exportarmos la aplicacion
module.exports = app;
// PASO 6: exporta el servidor express en funcion
module.exports.handler = serverless(app);
