const router = require("express").Router();
const operacion = require("../operations/registro_usuarios.operations");

router.get("/", operacion.getUsuario);
router.post("/", operacion.crearUsuario);
router.put("/:id", operacion.actualizarUsuario);
router.delete("/:id", operacion.borrarUsuario);

module.exports = router;
