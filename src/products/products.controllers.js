const Products = require('../models/products.models')
const Categories = require('../models/categories.models')

const findAllProducts = async () => {
  //! return await productDB
  //? select + from products
  //? select id, title, price from users
  const data = await Products.findAll({
    attributes: ['id', 'title', 'price', 'imageUrl'], //? Estar porpiedades son las que quiero mostrar

    include: {
      model: Categories,
      attributes: ['id', 'name']
    }

    //*attributes: {
    //*  exclude: ['createdAt', 'title']  //* Esta es la forma de excluir propiedades en específico
    //*}
  })

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

// const ffindProdductByIdWithPromises = (id) => {
//   return new Promise((resolve, reject) => {
//     const data = productDB.find(product => product.id === id)
//     if (data) {
//       resolve(data)
//     } else {
//       reject('Invalid ID')
//     }
//   })
// }

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
  return data[0] //? Accedemos a la posición 0 para retornar directamente la confirmación
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