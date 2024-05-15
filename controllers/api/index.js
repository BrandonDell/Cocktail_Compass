const router = require('express').Router();

const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/comment', commentRoutes);

module.exports = router;