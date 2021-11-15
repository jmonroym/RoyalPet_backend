const express = require('express')
const morgan = require('morgan')
const mongoose = require('./connection')
const app = express();

// configuracion
app.set('port', process.env.PORT || 3000 )
app.use(morgan('dev'))
app.use(express.json())

// lista de rutas base
app.use('/api/productos', require('./routes/productos.routes'))

//arranque
app.listen(app.get('port'), () => {
  console.log(process.env.npm_package_name + " Iniciando en puerto " + app.get('port'))
});
