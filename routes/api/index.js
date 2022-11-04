const router = require('express').Router();

const { route } = require('./category-route');
const categoryRoute = require('./category-route');
const productRoute = require('./product-route');
const tagRoute = require('./tag-route');

router.use('/category', categoryRoute);
router.use('/product', productRoute);
router.use('/tag', tagRoute);

module.exports = router;