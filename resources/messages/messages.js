let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /messages
router.get('/', async (req, res) => {
  res.send(await service.get())
})

// GET /messages/:id
router.get('/:id', async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /messages
// Required Data:
// - STRING content
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING time (TIME) FORMAT: HH:mm:ss
// - STRING/INTEGER sender_id
// - STRING/INTEGER receiver_id
router.post('/', async (req, res) => {
  res.send(await service.add(
    req.body.content,
    req.body.date,
    req.body.time,
    req.body.sender_id,
    req.body.receiver_id
  ))
})

// PUT /messages/:id
// Required Data:
// - STRING content
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING time (TIME) FORMAT: HH:mm:ss
// - STRING/INTEGER sender_id
// - STRING/INTEGER receiver_id
router.put('/:id', async (req, res) => {
  res.send(await service.update(
    req.params.id,
    req.body.content,
    req.body.date,
    req.body.time,
    req.body.sender_id,
    req.body.receiver_id
  ))
})

// DELETE /messages/:id
router.delete('/:id', async (req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /messages
// Required Data:
// - [STRING] id_range
router.delete('/', async (req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router