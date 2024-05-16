const User = require('./User');
const Recipe = require('./Recipe');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
<<<<<<< foundation

  onDelete: 'CASCADE'
});

// const Post = require('./Post');


=======
    onDelete: 'CASCADE'
});

>>>>>>> main
User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
Recipe.hasMany(Comment, {
  foreignKey: 'recipeId',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Recipe, {
  foreignKey: 'recipeId',
  onDelete: 'CASCADE'
});

module.exports = { User, Recipe, Comment, Post };