// import
const express = require("express");
const {
  getProducts,
  getFilteredProducts,
  getProductDetail,
} = require("../services/products");

// PASO3: se define una sub aplicacion de express con sus respectivas rutas.
const router = express.Router();

router.get("/productos", (req, res) => {
  const products = getProducts();
  res.send(products);
});

router.get("/productos/:categoria", (req, res) => {
  const searchTerm = req.params.categoria;
  const filter = getFilteredProducts(searchTerm);
  res.send(filter);
});

router.get("/productos/detalle/:id", (req, res) => {
  const productID = req.params.id;
  const filter = getProductDetail(productID);
  res.send(filter);
});

// export:  la variable router. con codigo de vanilla script.
module.exports = router;
