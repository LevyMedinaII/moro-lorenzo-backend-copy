let db = require('../../db/index.js')
let Logs = db.Logs

module.exports = {
  get: () => {
    return Logs.findAll()
  },
  getOne: (id) => {
    return Logs.findById(id)
  },
  add: (content) => {
    return Logs.create({ content })
  },
  deleteOne: (id) => {
    return Logs.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Logs.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return Logs.update({ last_name, first_name, type }, { where: { id } })
  },
}