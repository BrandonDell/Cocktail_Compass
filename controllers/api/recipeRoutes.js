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
        id: req.params.id,
      },
    });
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

router.put('/:id', async (req, res) => {
  // update a recipe by its `id` value
  try {
    const recipeData = await Recipe.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!recipeData[0]) {
      res.status(404).json({ message: 'No recipe with this id!' });
      return;
    }
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a recipe by its `id` value
  try {
    const recipeData = await Recipe.findByPk(req.params.id);
    if (!recipeData) {
      res.status(404).json({ message: 'No recipe with this id!' });
      return;
    }
    await recipeData.destroy();
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:recipeId/comment', async (req, res) => {
  try {
    const allComments = await Comment.findAll({
      where: {
        recipeId: req.params.recipeId,
      },
    });
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
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
router.delete('/:recipeId/comment/:commentId', async (req, res) => {
  // delete a comment by its `recipeId` value
  try {
    const commentData = await Comment.findByPk(req.params.commentId);
    if (!commentData) {
      res.status(404).json({ message: 'No comment with this id!' });
      return;
    }
    await commentData.destroy();
    res.status(200).json({ message: 'Comment deleted successfully' });
    return;
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
