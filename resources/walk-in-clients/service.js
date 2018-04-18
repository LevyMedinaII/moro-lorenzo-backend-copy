let db = require('../../db/index.js')
let WalkInClients = db.WalkInClients

module.exports = {
  get: () => {
    return WalkInClients.findAll()
  },
  getOne: (id) => {
    return WalkInClients.findById(id)
  },
  add: (service_availed, amount_paid, personId) => {
    return WalkInClients.create({ service_availed, amount_paid, personId })
  },
  deleteOne: (id) => {
    return WalkInClients.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return WalkInClients.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, service_availed, amount_paid, personId) => {
    return WalkInClients.update({ service_availed, amount_paid, personId }, { where: { id } })
  },
}