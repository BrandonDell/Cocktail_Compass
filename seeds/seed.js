const sequelize = require('../config/connection');
const { User, Recipe, Comment } = require('../models');

const userData = require('./userData.json')
const recipeData = require('./recipeData.json')
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 await Recipe.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
 });
 
  await Comment.bulkCreate(commentData, {
  individualHooks: true,
  returning: true,
});
  process.exit(0);
};

seedDatabase();
