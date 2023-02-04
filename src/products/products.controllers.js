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

const findAllProducts = async () => {
  return await productDB
}

const findProductById = async () => {
  const data = productDB.find(product => product.id === id)
  return data
}

const ffindProdductByIdWithPromises = (id) => {
  return new Promise((resolve, reject) => {
    const data = productDB.find(product => product.id === id)
    if (data) {
      resolve(data)
    } else {
      reject('Invalid ID')
    }
  })
}

const createNewProduct = async (prodObj) => {
  const newProduct = {
    id: ++baseId,
    title: prodObj.title,
    price: prodObj.price,
    img_url: prodObj.image_url
  }

  await productDB.push(newProduct)
  return newProduct
}

module.exports = {
  findAllProducts,
  findProductById,
  createNewProduct
}