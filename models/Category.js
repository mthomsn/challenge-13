const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
  id: {
    type: Datatypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category_name: {
    type: datatype.STRING,
    allowNull: false,
  }
})

module.exports = Category;