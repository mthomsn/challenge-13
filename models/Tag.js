const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tag_name: {
    type: DataTypes.STRING,
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'tag',
}
);

module.exports = Tag;