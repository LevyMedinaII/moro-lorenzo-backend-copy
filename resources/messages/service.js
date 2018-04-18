let db = require('../../db/index.js')
let Messages = db.Messages

module.exports = {
  get: () => {
    return Messages.findAll()
  },
  getOne: (id) => {
    return Messages.findById(id)
  },
  add: (content, date, time, senderId, receiverId) => {
    return Messages.create({ content, date, time, senderId, receiverId })
  },
  deleteOne: (id) => {
    return Messages.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Messages.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, content, date, time) => {
    return Messages.update({ content, date, time, senderId, receiverId }, { where: { id } })
  },
}