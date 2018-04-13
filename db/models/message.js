/* == Message Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Message = sequelize.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Message