const router = require("express").Router();
const operacion = require("../operations/productos.operations");

router.get("/", operacion.getProductos);

module.exports = router;
