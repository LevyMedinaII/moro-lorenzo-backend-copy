/* == Walk-In Clients Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const WalkInClients = sequelize.define('walk_in_clients', {
  service_availed: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount_paid: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = WalkInClients