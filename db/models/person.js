/* == Person Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Person = sequelize.define('person', {
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'W'
  }
})

module.exports = Person