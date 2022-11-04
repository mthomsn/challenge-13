const router = require('express').Router();
const { castArray } = require('lodash');
const { Category } = require('../../models');
const Tag = require('../../models/Tag');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product}],
    })
    res.status(200).json(categories);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// GET category by id
router.get('/:id', async (req, res) => {
  try {
    const cat = await Category.findByPk(req.params.id);
    if(!cat) {
      res.status(404).json({message: 'No category was found with that id'});
      return;
    }
    res.status(200).json(cat);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// POST new category
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(userData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});



// PUT change category by id


// DELETE category by id

module.exports = router;