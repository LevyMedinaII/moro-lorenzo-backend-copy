const moment = require('moment')
let db = require('../../db/index.js')
let Admins = db.Admins
let Persons = db.Persons

module.exports = {
  get: () => {
    return Admins.findAll()
  },
  getOne: (id) => {
    return Admins.findById(id)
  },
  add: async (username, password) => {
    try {
      if (Admins.findOne({ where: { username } }))
        throw new Error('Existing Admin Username')
      password = await Admins.generateHash(password)
      return Admins.create({ username, password })
    } catch (err) {
      return err
    }
  },
  deleteOne: (id) => {
    return Admins.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return Admins.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: async (id, username, password) => {
    try {
      let admin =  await Admins.findOne({ where: { id } })
      password = Admins.generateHash(password)
      return Admins.update({ username, password }, { where: { id } })
    } catch (err) {
      return err
    }
  },
}