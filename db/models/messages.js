/* == Messages Table == */
// Date-Time Library Import
const moment = require('moment')
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Messages = sequelize.define('messages', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    default: moment(),
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
    default: moment(),
  },
})

module.exports = Messages