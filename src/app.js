//? Dependencies
const express = require('express')

//? Initial configs
const app = express()

app.use(express.json())

//* Como nosotros podemos recibir info o data del cliente

app.get('/', (req, res) => {
  res.json({
    message: 'Server OK!'
  })
})

app.listen(9000, () => {
  console.log('Server started at port 9000');
})
