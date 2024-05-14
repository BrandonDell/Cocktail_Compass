const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/user', userRoutes);
router.use('/recipes', recipeRoutes);

// Import individual controller files
// const userControllers = require('./userRoutes');
// Import other controller files as needed
// home routes

// Define routes for each controller
// router.use('/user', userControllers);
// router.use home

module.exports = router;