/* == Sales Transactions Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const SalesTransactions = sequelize.define('sales_transactions', {
  amount: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
})

module.exports = SalesTransactions