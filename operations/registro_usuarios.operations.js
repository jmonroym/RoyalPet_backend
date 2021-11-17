const coleccionRegistro_usuarios = require("../schemas/registro_usuarios.schema");
const operaciones = {};

operaciones.crearUsuario = async function(req, res){
const registro = new coleccionRegistro_usuarios(req.body);
await registro.save();
res.json({"status":"Registro exitoso"})
}
module.exports = operaciones;
