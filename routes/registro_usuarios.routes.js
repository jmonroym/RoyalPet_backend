const router = require("express").Router();
const operacion = require("../operations/registro_usuarios.operations");

router.post("/", operacion.crearUsuario);
router.put("/:id" , operacion.actualizarUsuario);

module.exports = router;
