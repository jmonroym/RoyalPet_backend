const coleccionRegistro_usuarios = require("../schemas/registro_usuarios.schema");
const operaciones = {};


operaciones.getUsuario = async function(req, res) {

		const usuario = await coleccionRegistro_usuarios.find(req.query)
		res.json(usuario)
}

operaciones.crearUsuario = async function(req, res){
const registro = new coleccionRegistro_usuarios(req.body);
await registro.save();
res.json({"status":"Registro exitoso"})
}

operaciones.actualizarUsuario = async function(req, res){
  const { id } = req.params;
  const usuario = {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    correo_electronico: req.body.correo_electronico,
    numero_celular: req.body.numero_celular,
    fecha_nacimiento: req.body.fecha_nacimiento,
    cedula: req.body.cedula
  }
  console.log(usuario)
  await coleccionRegistro_usuarios.findByIdAndUpdate(req.params.id, {$set: usuario}, {new:false});
  res.json({"status":"usuario actualizado"})
}


module.exports = operaciones;
