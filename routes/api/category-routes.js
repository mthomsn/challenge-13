const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categories = await Category.findAll({include: [{ model: Product}]});
    res.status(200).json(categories);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const cat = await Category.findByPk(req.params.id);
    if(!cat) {
      res.status(404).json({message: 'No category was found with that id'});
    }
    res.status(200).json(cat);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const userData = await Category.create(req.body);
    res.status(200).json(userData);
  }
  catch(err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const putCat = await Category.update(
      {
      category_name: req.body.category_name,
      },
      {
        where: { id: req.params.id }
      })
      res.status(200).json(putCat);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCat = await Category.destroy({where: { id: req.params.id }});
    res.status(200).json(deleteCat);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
