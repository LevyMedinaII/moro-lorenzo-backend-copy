let db = require('../../db/index.js')
const moment = require('moment')
let SalesTransactions = db.SalesTransactions

module.exports = {
  get: () => {
    return SalesTransactions.findAll()
  },
  getOne: (id) => {
    return SalesTransactions.findById(id)
  },
  getDailySalesReport: () => {
    
  },
  add: (amount, date, personId) => {
    return SalesTransactions.create({ amount, date, personId })
  },
  deleteOne: (id) => {
    return SalesTransactions.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return SalesTransactions.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, amount, date, personId) => {
    return SalesTransactions.update({ amount, date, personId }, { where: { id } })
  },
}