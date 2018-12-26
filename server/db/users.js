'use strict';

const db = require('./database');
const Sequelize = require('sequelize');
const crypto = require('crypto');
const _ = require('lodash');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: Sequelize.STRING,
  facebookId: Sequelize.STRING
}, {
  hooks: {
    beforeCreate: setSaltAndPassword,
    beforeUpdate: setSaltAndPassword
  }
})

// instance methods
User.prototype.correctPassword = function (candidatePassword) {
  return this.Model.encryptPassword(candidatePassword, this.salt) === this.password;
};

User.prototype.sanitize = function () {
  return _.omit(this.toJSON(), ['password', 'salt']);
};

// My own instance method to check password correct:
User.prototype.hasMatchingPassword = function (passwordPlainText) {
  const hash = crypto.createHash('sha1');
  hash.update(passwordPlainText);
  hash.update(this.salt);
  const enteredPassword = hash.digest('hex'); // final hashed and salted password from entered password string
  if (enteredPassword === this.password) { // compare the entered password to the one on the user instance
    return true
  }
  return false
}
// class methods
User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function (plainText, salt) {
  const hash = crypto.createHash('sha1');
  hash.update(plainText);
  hash.update(salt);
  return hash.digest('hex');
};

function setSaltAndPassword (user) {
  // we need to salt and hash again when the user enters their password for the first time
  // and do it again whenever they change it
  if (user.changed('password')) {
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }

}

module.exports = User;

module.exports = User;
