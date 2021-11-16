const coleccionProductos = require("../schemas/productos.schema");
const operaciones = {};

//operaciones.getProducto = async function(req, res){}
operaciones.getProductos = async function(req, res) {
  const datos = await coleccionProductos.find();
  res.json(datos);
};
//operaciones.crearProducto = async function(req, res){}
//operaciones.actualizarProducto = async function(req, res){}
//operaciones.borrarProducto = async function(req, res){}

module.exports = operaciones;
