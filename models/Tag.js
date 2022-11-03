const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    tag_name: {
      type: DataType.STRING,
    }
  }
);

module.exports = Tag;