'use strict'

const db = require('./database')

// The purpose of this module is to bring our Sequelize instance (`db`) together
// with our models (which we should define in separate modules in this directory).

// REQUIRE IN OTHER MODELS

const User = require('./users')
// const Post = require('./post')

// ASSOCIATIONS

// Post.belongsTo(User);
// User.hasMany(Post)

module.exports = {
  // Include your models in this exports object as well!
  db,
  User
}
