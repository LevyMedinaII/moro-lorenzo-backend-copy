/* == Logs Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Logs = sequelize.define('logs', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
  },
})

module.exports = Logs