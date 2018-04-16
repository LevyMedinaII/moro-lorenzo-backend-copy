let db = require('../../db/index.js')
let Visits = db.Visits

module.exports = {
  get: () => {
    return Visits.findAll()
  },
  getOne: (id) => {
    return Visits.findById(id)
  },
  add: (content) => {
    return Visits.create({ content })
  },
  deleteOne: (id) => {
    return Visits.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Visits.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return Visits.update({ last_name, first_name, type }, { where: { id } })
  },
}