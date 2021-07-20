// simular base de datos
let productos = [{ name: "papitas" }, { name: "agua" }];

//1 importamos el paquete
const express = require("express");

// 2 generamos la aplicacion de express
const app = express();

// 2.1 configuracion para comunicacion con archivos json
app.use(express.json());

// 3 configuracion del puerto
const port = 3000;

//4  definir la ruta, (metodo, URI, funcion) CRUD

app.get("/productos", (req, res) => {
  res.send(productos);
});

app.post("/productos", (req, res) => {
  console.log(req.body);
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.send(nuevoProducto);
});

app.delete("/productos", (req, res) => {
  console.log(req.body);
  const nombreProducto = req.body.name;
  productos = productos.filter((producto) => producto.name !== nombreProducto);
  res.send(productos);
});

app.put("/productos/:name", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  const actualizacion = req.body;
  const nombreDeProducto = req.params.name;
  const posicionProducto = productos.findIndex(
    (producto) => producto.name === nombreDeProducto
  );
  productos[posicionProducto] = actualizacion;
  res.send(productos[posicionProducto]);
});

// 5 corre la applicacion de express
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
