const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init({
  id: {
    type: Datatypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  product_name: {
    type: datatype.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    isDecimal: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    isNumeric: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      modal: 'category',
      key: 'id',
    },
  },
})

module.exports = Product;