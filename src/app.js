//? Dependencies
const express = require('express')
const productRouter = require('./products/products.router')
const db = require('./utils/database')

//? Initial configs
const app = express()

app.use(express.json())

db.authenticate() //? Mostrar en consola de manera informartiva si la conexión se hizo de manera correcta
  .then(() => {
    console.log('Las credenciales de la base de datos son correctas');
  })
  .catch((err) => {
    console.log(err);  //! Errores de autenticación (contraseñaa, usuarios o hosts)
  })

db.sync() //? Sincroniza nuestra base de datos con los modelos que tenemos definidos
  .then(() => {
    console.log('La base de datos del virus ha sido actualizada');
  })
  .catch((err) => {
    console.log(err);  //! Error en las tablas, propiedades, etc
  })

//* Como nosotros podemos recibir info o data del cliente

app.get('/', (req, res) => {
  res.json({
    message: 'Server OK!',
    routes: {
      products: 'http.//localhost:9000/api/v1/products'
    }
  })
})

//? Rutas de productos
app.use('/api/v1', productRouter)

app.listen(9000, () => {
  console.log('Server started at port 9000');
})
