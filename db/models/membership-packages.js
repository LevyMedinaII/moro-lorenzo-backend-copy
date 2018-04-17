/* == Membership Packages Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const MembershipPackages = sequelize.define('membership_packages', {
  membership_duration: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  membership_fee: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = MembershipPackages