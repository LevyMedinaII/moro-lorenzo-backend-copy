const Sequelize = require('sequelize')
let sequelize

if (!process.env.DATABASE_URL)
  throw new Error('[ERROR] No database url in environment')
sequelize = new Sequelize(process.env.DATABASE_URL)

module.exports = {
  Sequelize,
  sequelize,
}