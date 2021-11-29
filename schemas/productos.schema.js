const mongoose = require("mongoose");
const { Schema } = mongoose;

const esquema = new Schema({
  nombre: { type: String, required: true },
  color: { type: String, required: true },
  tipo_mascota: { type: String, required: true },
  raza: { type: String, required: true },
  precio: { type: Number, required: true },
  oferta: { type: Boolean, required: true },
  tamanio: { type: String, required: true },
  categoria: { type: String, required: true }
});
module.exports = mongoose.model("Producto", esquema);
