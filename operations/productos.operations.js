const coleccionProductos = require("../schemas/productos.schema");
const operaciones = {};

operaciones.getProducto = async function(req, res){
  const dato = await coleccionProductos.findById(req.params.id);
  res.json(dato);
}
//operaciones.getProductos = async function(req, res) {
  //const datos = await coleccionProductos.find();
  //res.json(datos);
//};
operaciones.getProductosFiltro = async function(req, res){
  const filtro = await coleccionProductos.find({
    oferta:false
  }).exec();
  res.json(filtro);
}
operaciones.crearProducto = async function(req, res){
const producto = new coleccionProductos(req.body);
await producto.save();
res.json({"status":"producto guardado exitosamente!"})
}
operaciones.actualizarProducto = async function(req, res){
  const { id } = req.params;
  const producto = {
    nombre: req.body.nombre,
    color: req.body.color,
    tipo_mascota: req.body.tipo_mascota,
    raza: req.body.raza,
    precio: req.body.precio,
    oferta: req.body.oferta,
    tamanio: req.body.tamanio,
    categoria: req.body.categoria
  }
  console.log(producto)
  await coleccionProductos.findByIdAndUpdate(req.params.id, {$set: producto}, {new:true});
  res.json({"status":"producto actualizado"})
}
operaciones.borrarProducto = async function(req, res){
  await coleccionProductos.findByIdAndRemove(req.params.id);
  res.json({"status":"producto borrado"})
}

module.exports = operaciones;
