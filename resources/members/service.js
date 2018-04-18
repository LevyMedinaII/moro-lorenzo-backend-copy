let db = require('../../db/index.js')
let Members = db.Members
let Persons = db.Persons

module.exports = {
  get: () => {
    return Members.findAll()
  },
  getOne: (id) => {
    return Members.findById(id)
  },
  getWeeklyReport: () => {

  },
  add: async (
    image,
    address,
    sex,
    email,
    birthday,
    landline,
    work_phone,
    mobile_number,
    emergency_contact_number,
    contract_begin,
    contrack_end,
    medical_condition,
    membership_card_status,
    membership_status,
    activity,
    membershipPackageId,
    personId
  ) => {
    return Members.create({
      image,
      address,
      sex,
      email,
      birthday,
      landline,
      work_phone,
      mobile_number,
      emergency_contact_number,
      contract_begin,
      contrack_end,
      medical_condition,
      membership_card_status,
      membership_status,
      activity,
      membershipPackageId,
      personId,
    })
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
  deleteOne: (id) => {
    return Members.destroy({ where: { id } })
  },
  deleteInactive: () => {
    return Members.destroy({ where: { activity: 'Inactive' } })
  },
  update: (
    id,
    image,
    address,
    sex,
    email,
    birthday,
    landline,
    work_phone,
    mobile_number,
    emergency_contact_number,
    contract_begin,
    contrack_end,
    medical_condition,
    membership_card_status,
    membership_status,
    activity,
    membershipPackageId,
    personId
  ) => {
    return Members.update({
      image,
      address,
      sex,
      email,
      birthday,
      landline,
      work_phone,
      mobile_number,
      emergency_contact_number,
      contract_begin,
      contrack_end,
      medical_condition,
      membership_card_status,
      membership_status,
      activity,
      membershipPackageId,
      personId
    }, {
      where: { id }
    })
  },
}