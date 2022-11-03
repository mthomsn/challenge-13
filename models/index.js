const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.hasOne(Category);

Category.hasMany(Product);

Tag.belongsToMany(Product);

Product.belongsToMany(Tag, {
  through: {
    modal: ProductTag,
  },
  as: 'product_tag',
});

module.exports = { Category, Product, Tag, ProductTag };