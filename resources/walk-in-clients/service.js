let db = require('../../db/index.js')
let WalkInClients = db.WalkInClients

module.exports = {
  get: () => {
    return WalkInClients.findAll()
  },
  getOne: (id) => {
    return WalkInClients.findById(id)
  },
  add: (content) => {
    return WalkInClients.create({ content })
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
  update: (id, last_name, first_name, type) => {
    return WalkInClients.update({ last_name, first_name, type }, { where: { id } })
  },
}