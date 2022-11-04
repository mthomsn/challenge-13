const router = require('express').Router();
const { Category } = require('../../models');

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
    const userData = await Category.create(req.body);

    res.status(200).json(userData);
  }
  catch(err) {
    
    res.status(400).json(err);
  }
});

// PUT change category by id


// DELETE category by id

module.exports = router;