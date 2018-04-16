let db = require('../../db/index.js')
let SalesTransactions = db.SalesTransactions

module.exports = {
  get: () => {
    return SalesTransactions.findAll()
  },
  getOne: (id) => {
    return SalesTransactions.findById(id)
  },
  add: (content) => {
    return SalesTransactions.create({ content })
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
  update: (id, last_name, first_name, type) => {
    return SalesTransactions.update({ last_name, first_name, type }, { where: { id } })
  },
}