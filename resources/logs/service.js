const moment = require('moment')
let db = require('../../db/index.js')
let Logs = db.Logs
let Persons = db.Persons

module.exports = {
  get: () => {
    return Logs.findAll()
  },
  getOne: (id) => {
    return Logs.findById(id)
  },
  add: async (date, content, personId) => {
    try {
      if (!date) date = moment()
      let person =  await Persons.findOne({ where: { id: personId } })
      return Logs.create({ date, content, personId })
    } catch (err) {
      return err
    }
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
  update: async (id, date, content, personId) => {
    try {
      let log =  await Logs.findOne({ where: { id } })
      let personId = await Persons.findOne({ where: { id: personId } })
      return Logs.update({ date, content, personId }, { where: { id } })
    } catch (err) {
      return err
    }
  },
}