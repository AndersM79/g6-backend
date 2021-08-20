const jsonData = require("./productos.json");

let products = jsonData.products;

const getProducts = () => {
  return products;
};

const getFilteredProducts = (searchTem) => {
  return products.filter((product) => product.category === searchTem);
};

const getProductDetail = (productID) => {
  return products.find((product) => product._id === productID);
};

module.exports = {
  getProducts,
  getFilteredProducts,
  getProductDetail,
};
