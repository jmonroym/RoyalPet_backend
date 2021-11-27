const express = require("express");
const morgan = require("morgan");
const mongoose = require("./connection");
const app = express();
const cors = require("cors");

//Configuracion
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
//Lista de rutas base
app.use("/api/productos", require("./routes/productos.routes"));
app.use("/api/usuarios", require("./routes/registro_usuarios.routes"));
//Arranque
app.listen(app.get("port"), () => {
  console.log(
    process.env.npm_package_name + " iniciado en puerto " + app.get("port")
  );
});
