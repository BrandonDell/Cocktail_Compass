const User = require('./User');
const Recipe = require('./Recipe');


User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Recipe };