const mongoose = require("mongoose");
const { Schema } = mongoose;

const esquema = new Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  correo_electronico: { type: String, required: true },
  numero_celular: { type: Number, required: true },
  fecha_nacimiento: { type: String, required: true },
  cedula: { type: Number, required: true }

});
module.exports = mongoose.model("Registro_usuario", esquema);
