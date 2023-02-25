//TODO Crear un modelo de categorias donde guardemos id y name

const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Categories = db.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, //? Permitir valores nulos
    unique: true
  }
})

module.exports = Categories