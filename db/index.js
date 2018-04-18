const DB_CONFIG = require('./config')

const Admins = require('./models/admins')
const Members = require('./models/members')
const MembershipPackages = require('./models/membership-packages')
const Messages = require('./models/messages')
const Persons = require('./models/persons')
const SalesTransactions = require('./models/sales-transactions')
const Logs = require('./models/logs')
const Visits = require('./models/visits')
const WalkInClients = require('./models/walk-in-clients')

/* == DECLARE relationships == */
Members.hasMany(Messages)
Persons.hasMany(SalesTransactions)
Persons.hasMany(Logs)
Persons.hasMany(Visits)

Members.belongsTo(Persons)
Members.belongsTo(MembershipPackages)
SalesTransactions.belongsTo(Persons)
Logs.belongsTo(Persons)
Visits.belongsTo(Persons)
WalkInClients.belongsTo(Persons)
Messages.belongsToMany(Members, { through: 'sender' })
Messages.belongsToMany(Members, { through: 'receiver' })

/* == CREATE tables == */
createAllTables = async () => {
  await Admins.sync()
  await Persons.sync()
  await MembershipPackages.sync()
  await Members.sync()
  await Messages.sync()
  await SalesTransactions.sync()
  await Logs.sync()
  await Visits.sync()
  await WalkInClients.sync()
}

createAllTables()

module.exports = {
  Sequelize: DB_CONFIG.Sequelize,
  sequelize: DB_CONFIG.sequelize,
  Admins,
  Members,
  MembershipPackages,
  Messages,
  Persons,
  SalesTransactions,
  Logs,
  Visits,
  WalkInClients,
}