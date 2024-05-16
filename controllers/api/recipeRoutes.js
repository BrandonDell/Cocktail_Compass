const router = require('express').Router();
const { Recipe, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allRecipes = await Recipe.findAll();
    res.status(200).json(allRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try {
        const allRecipes = await Recipe.findOne({
            where: {
          id: req.params.id
      }});
      res.status(200).json(allRecipes);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});
  
router.post('/', async (req, res) => {
  try {
    const addRecipe = await Recipe.create(req.body);
    res.status(200).json(addRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:recipeId/comment', async (req, res) => {
  try {
    const allComments = await Comment.findAll({
      where: {
    recipeId: req.params.recipeId
}});
    res.status(200).json(allComments);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/:recipeId/comment', async (req, res) => {
    try {
      const userId = req.session.user_id;
      if (!userId) {
        return res.status(401).json({ message: 'User not authenticated' });
      }
      const newComment = await Comment.create({
            comment_text: req.body.comment_text,
            recipeId: req.params.recipeId,
            userId: userId,
        })
        res.status(200).json(newComment);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
module.exports = router;
