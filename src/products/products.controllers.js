const Products = require('../models/products.models')

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
  //! return await productDB

  const data = await Products.findAll()

  return data
}

const findProductById = async (id) => {
  //! const data = productDB.find(product => product.id === id)
  //! return data

  const data = await Products.findOne({
    where: {
      id: id
    }
  })
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
  //!   const newProduct = {
  //!     id: ++baseId,
  //!     title: prodObj.title,
  //!     price: prodObj.price,
  //!     img_url: prodObj.image_url
  //!   }
  //! 
  //!   await productDB.push(newProduct)
  //!   return newProduct

  const newProduct = {
    title: prodObj.title,
    price: prodObj.price,
    imageUrl: prodObj.imageUrl
  }

  const data = await Products.create(newProduct)

  return data
}

const updateProduct = async (id, productObj) => {
  const data = await Products.update(productObj, {
    where: {
      id: id
    }
  })
  return data
  //? [1] => La cantidad de productos que han sido modificados
  //? [0] => Error en caso de que el where no haya encontrado coincidencias -> el id no existe
}

const deleteProduct = async (id) => {
  const data = await Products.destroy({
    where: {
      id: id
    }
  })
  return data
  //? 1 => confirmación de qque el producto se eliminnó correctamente
  //? 0 => el id que le mandamos no existe  
}

module.exports = {
  findAllProducts,
  findProductById,
  createNewProduct,
  updateProduct,
  deleteProduct
}