const Sequelize = require('../../db/config').Sequelize
let db = require('../../db/index.js')
let Person = db.Person

module.exports = {
  get: () => {
    return Person.findAll()
  },
  getOne: (id) => {
    return Person.findById(id)
  },
  add: (last_name, first_name, type) => {
    return Person.create({ last_name, first_name, type })
  },
  deleteOne: (id) => {
    return Person.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Person.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return Person.update({ last_name, first_name, type }, { where: { id } })
  },
}