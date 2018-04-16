let db = require('../../db/index.js')
let MembershipPackages = db.MembershipPackages

module.exports = {
  get: () => {
    return MembershipPackages.findAll()
  },
  getOne: (id) => {
    return MembershipPackages.findById(id)
  },
  add: (content) => {
    return MembershipPackages.create({ content })
  },
  deleteOne: (id) => {
    return MembershipPackages.destroy({ where: { id } })
  },
  delete: (id_range) => {
    return MembershipPackages.destroy({
      where: {
        id: {
          [Sequelize.Op.contains]: id_range
        }
      }
    })
  },
  update: (id, last_name, first_name, type) => {
    return MembershipPackages.update({ last_name, first_name, type }, { where: { id } })
  },
}