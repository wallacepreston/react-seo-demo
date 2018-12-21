'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

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
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'ttps://randomuser.me/api/portraits/men/1.jpg'
  }
})

module.exports = User;
