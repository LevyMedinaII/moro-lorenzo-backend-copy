const Sequelize = require('../../db/config').Sequelize
let db = require('../../db/index.js')
let Persons = db.Persons

module.exports = {
  get: () => {
    return Persons.findAll()
  },
  getOne: (id) => {
    return Persons.findById(id)
  },
  add: (last_name, first_name, type) => {
    return Persons.create({ last_name, first_name, type })
  },
  deleteOne: (id) => {
    return Persons.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Persons.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return Persons.update({ last_name, first_name, type }, { where: { id } })
  },
}