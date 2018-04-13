let db = require('../../db/index.js')
let Message = db.Message

module.exports = {
  get: () => {
    return Message.findAll()
  },
  getOne: (id) => {
    return Message.findById(id)
  },
  add: (content) => {
    return Message.create({ content })
  },
  deleteOne: (id) => {
    return Message.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Message.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return Message.update({ last_name, first_name, type }, { where: { id } })
  },
}