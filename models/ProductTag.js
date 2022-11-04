const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      modal: 'product',
      key: 'id',
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        modal: 'tag',
        key: 'id',
      },
    },
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product-tag',
}
);

module.exports = ProductTag;