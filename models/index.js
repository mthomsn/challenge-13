const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.hasOne(Category);

Category.hasMany(Product);

Tag.belongsToMany(Product, {
  through: {
    modal: ProductTag,
    // foreignKey: 'tag_id'
  },
  as: 'tag_rel'
});

Product.belongsToMany(Tag, {
  through: {
    modal: ProductTag,
    // foreignKey: 'product_id'
  },
  as: 'product_rel',
});

module.exports = { Category, Product, Tag, ProductTag };