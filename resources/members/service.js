let db = require('../../db/index.js')
let Members = db.Members

module.exports = {
  get: () => {
    return Members.findAll()
  },
  getOne: (id) => {
    return Members.findById(id)
  },
  add: (content) => {
    return Members.create({ content })
  },
  deleteOne: (id) => {
    return Members.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Members.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  deleteInactive: () => {
    return Members.destroy({ where: { activity: 'Inactive' } })
  },
  update: (id, last_name, first_name, type) => {
    return Members.update({ last_name, first_name, type }, { where: { id } })
  },
}