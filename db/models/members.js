/* == Members Table == */
// Import DB Configuration
const DB_CONFIG = require('./../config.js')
const Sequelize = DB_CONFIG.Sequelize
const sequelize = DB_CONFIG.sequelize

const Members = sequelize.define('members', {
  image: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  landline: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  work_phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  emergency_contact_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contract_begin: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  contract_end: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  medical_condition: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  membership_card_status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'X',
  },
  membership_status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'ACTIVE',
  },
  activity: {
    type: Sequelize.STRING,
    allowNull: false,
    default: 'Active',
  },
})

module.exports = Members