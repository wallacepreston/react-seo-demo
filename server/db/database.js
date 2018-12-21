'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

const db = new Sequelize(
  process.env.DATABASE_URL || // FOR DEPLOYING TO HEROKU
  `postgres://localhost:5432/${pkg.name}` // FOR DEVELOPMENT
  , {
    logging: false // so we don't see all the SQL queries getting made
  }
)

module.exports = db
