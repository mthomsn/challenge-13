const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.hasOne(Category);

Category.hasMany(Product);

Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id'});

Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id'});

module.exports = { Category, Product, Tag, ProductTag };