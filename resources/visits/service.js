let db = require('../../db/index.js')
let Visits = db.Visits

module.exports = {
  get: () => {
    return Visits.findAll()
  },
  getOne: (id) => {
    return Visits.findById(id)
  },
  getPersonVisits: (personId) => {
    return Visits.findAll({ where: { personId } })
  },
  add: (date, time_in, time_out, personId) => {
    return Visits.create({ date, time_in, time_out, personId })
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
  update: (id, date, time_in, time_out, personId) => {
    return Visits.update({ date, time_in, time_out, personId }, { where: { id } })
  },
}