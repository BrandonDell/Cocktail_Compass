const sequelize = require('../config/connection');
const { User, Recipe, Comment } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipe.bulkCreate(recipeData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
