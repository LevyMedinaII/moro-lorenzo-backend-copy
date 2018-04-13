const DB_CONFIG = require('./config')
const Person = require('./models/person')
const Message = require('./models/message')

/* == DECLARE relationships == */
Message.belongsTo(Person)

/* == CREATE tables == */
Person.sync()
Message.sync()

module.exports = {
  Sequelize: DB_CONFIG.Sequelize,
  sequelize: DB_CONFIG.sequelize,
  Person, Message
}