/* == Admins Table == */
// Date-Time Library Import
const moment = require('moment')
const bcrypt = require('bcrypt')

// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Admins = sequelize.define('admins', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

// Model function for generating password
Admins.generateHash = async (password) => {
  return await bcrypt.hash(password, bcrypt.genSaltSync(8))
}

// Model function for checking if password is equal to the encrypted passwords
Admins.validatePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}

module.exports = Admins