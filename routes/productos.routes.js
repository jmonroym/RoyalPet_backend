const router = require("express").Router();
const operacion = require("../operations/productos.operations");

//router.get("/", operacion.getProductos);
router.get("/", operacion.getProductosFiltro);
router.get("/:id", operacion.getProducto);
router.post("/", operacion.crearProducto);
router.put("/:id" , operacion.actualizarProducto);
router.delete("/:id", operacion.borrarProducto);

module.exports = router;
