let db = require('../../db/index.js')
let MembershipPackages = db.MembershipPackages

module.exports = {
  get: () => {
    return MembershipPackages.findAll()
  },
  getOne: (id) => {
    return MembershipPackages.findById(id)
  },
  add: (membership_duration, membership_fee) => {
    return MembershipPackages.create({ membership_duration, membership_fee })
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
  update: (id, membership_duration, membership_fee) => {
    return MembershipPackages.update({ membership_duration, membership_fee }, { where: { id } })
  },
}