const Products = require('../models/products.models')

try {
  Products.bulkCreate([
    {
      title: 'xiaomi Redmi 9a',
      price: 300,
      imageUrl: 'http://google.com/',
      categoryId: 1
    },
    {
      title: 'Lavadora LG',
      price: 500,
      imageUrl: 'http://google.com/',
      categoryId: 1
    },
    {
      title: 'casita para perros',
      price: 100,
      imageUrl: 'http://google.com/',
      categoryId: 9
    },
    {
      title: 'Serrucho',
      price: 30,
      imageUrl: 'http://google.com/',
      categoryId: 10
    },
    {
      title: 'Escritorio',
      price: 120,
      imageUrl: 'http://google.com/',
      categoryId: 7
    },
    {
      title: 'Control Play Station 5',
      price: 60,
      imageUrl: 'http://google.com/',
      categoryId: 2
    },
  ])
} catch (error) {

}