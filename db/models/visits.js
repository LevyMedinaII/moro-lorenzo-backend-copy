/* == Visits Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Visits = sequelize.define('visits', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  time_in: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  time_out: {
    type: Sequelize.TIME,
  },
})

module.exports = Visits