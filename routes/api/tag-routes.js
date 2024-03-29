const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }]
    });
    res.status(200).json(allTags);
  }
  catch(err) {
    res.status(404).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const t = await Tag.findByPk(req.params.id, {include: Product});
    res.status(200).json(t);
  }
  catch(err) {
    res.status(401).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({tag_name: req.body.tag_name});
    res.status(200).json(newTag);
  }
  catch(err) {
    res.status(404).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const update = await Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where: {id: req.params.id}
    });
    res.status(200).json(update);
  }
  catch(err) {
    res.status(404).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({where: {id: req.params.id}});
    res.status(200).json(deleteTag);
  }
  catch(err) {
    res.status(404).json(err);
  }
});

module.exports = router;
