const router = require('express').Router();

const customRoutes = require('./routes');

router.use('/route', customRoutes);

module.exports = router;