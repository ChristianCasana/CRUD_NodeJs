//? Dependencies
const express = require('express')

//? Initial configs
const app = express()

app.use(express.json())

const productDB = [
  {
    id: 1,
    title: 'Xbox serie X',
    price: '600 USD',
    image_url: 'https://coolboxpe.vtexassets.com/arquivos/ids/211102-800-450?v=637873787853270000&width=800&height=450&aspect=true'
  },
  {
    id: 2,
    title: 'Play Station 5',
    price: '700 USD',
    image_url: 'https://coolboxpe.vtexassets.com/arquivos/ids/211102-800-450?v=637873787853270000&width=800&height=450&aspect=true'
  }
]

let baseId = 2

//* Como nosotros podemos recibir info o data del cliente

app.get('/', (req, res) => {
  res.json({
    message: 'Server OK!'
  })
})

//TODO Crear una ruta que muestre todos los productos

app.get('/products', (req, res) => {
  res.json(productDB)
})

//TODO Crear una ruta que muestre un producto dependiendo del ID

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id)

  const data = productDB.find((item) => id === item.id)

  if (data) {
    res.json(data)
  } else {
    res.status(404).json({
      message: 'Invalid ID'
    })
  }

})

//TODO Crear una ruta que agregue un producto nuevo

app.post('/products', (req, res) => {
  const data = req.body

  const newProduct = {
    id: ++baseId,
    title: data.title,
    price: data.price,
    img_url: data.image_url
  }

  productDB.push(newProduct)
  res.json(newProduct)
})


app.listen(9000, () => {
  console.log('Server started at port 9000');
})
