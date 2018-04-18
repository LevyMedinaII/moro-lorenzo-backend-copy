let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /members
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /members/:id
router.get('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /members
// Required Data:
// - STRING image (url)
// - STRING address
// - STRING sex
// - STRING email
// - STRING birthday (DATE) (any format with Month, Day, and Year(full) separated by -)
// ---- e.g. MM-DD-YYYY (12-27-1996) or DD-MM-YYYY (27-12-1996)
// - STRING landline
// - STRING work_phone
// - STRING mobile_number
// - STRING emergency_contact_number
// - STRING contract_begin (DATE) (any format with Month, Day, and Year(full) separated by -)
// ---- e.g. MM-DD-YYYY (12-27-1996) or DD-MM-YYYY (27-12-1996)
// - STRING contract_end (DATE) (any format with Month, Day, and Year(full) separated by -)
// ---- e.g. MM-DD-YYYY (12-27-1996) or DD-MM-YYYY (27-12-1996)
// - STRING medical_condition
// - STRING membership_card_status VALUES: X, O
// - STRING membership_status VALUES: ACTIVE, WARNING, EXPIRED
// - STRING activity VALUES: Active, Inactive
// - INTEGER/STRING membership_package_ids
router.post('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(
    req.body.image,
    req.body.address,
    req.body.sex,
    req.body.email,
    req.body.birthday,
    req.body.landline,
    req.body.work_phone,
    req.body.mobile_number,
    req.body.emergency_contact_number,
    req.body.contract_begin,
    req.body.contrack_end,
    req.body.medical_condition,
    req.body.membership_card_status,
    req.body.membership_status,
    req.body.activity,
    req.body.membership_package_id
  ))
})

// PUT /members
// Required Data:
// - STRING image (url)
// - STRING address
// - STRING sex
// - STRING email
// - STRING birthday (DATE) (any format with Month, Day, and Year(full) separated by -)
// ---- e.g. MM-DD-YYYY (12-27-1996) or DD-MM-YYYY (27-12-1996)
// - STRING landline
// - STRING work_phone
// - STRING mobile_number
// - STRING emergency_contact_number
// - STRING contract_begin (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING contract_end (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING medical_condition
// - STRING membership_card_status VALUES: X, O
// - STRING membership_status VALUES: ACTIVE, WARNING, EXPIRED
// - STRING activity VALUES: Active, Inactive
// - INTEGER/STRING membership_package_ids
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.update(
    req.params.id,
    req.body.image,
    req.body.address,
    req.body.sex,
    req.body.email,
    req.body.birthday,
    req.body.landline,
    req.body.work_phone,
    req.body.mobile_number,
    req.body.emergency_contact_number,
    req.body.package_availed,
    req.body.contract_begin,
    req.body.contrack_end,
    req.body.medical_condition,
    req.body.membership_card_status,
    req.body.membership_status,
    req.body.activity
  ))
})

// DELETE /members/:id
router.delete('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /members
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.delete(req.body.id_range))
})

// DELETE /inactive
// Description: Deletes all members with column activity = INACTIVE
router.delete('/inactive', auth.ensureAdmin, async (req, res) => {
  res.send(await service.deleteInactive())
})

module.exports = router