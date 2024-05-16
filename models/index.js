const User = require('./User');
const Recipe = require('./Recipe');
const Comment = require('./Comment');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Recipe, Comment };