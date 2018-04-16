let router = require('express').Router()
let service = require('./service')

// GET /messages
router.get('/', async (req, res) => {
  res.send(await service.get())
})

// GET /messages/:id
router.get('/:id',  async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /messages
// Required Data:
// - STRING content
router.post('/', async (req, res) => {
  res.send(await service.add(req.body.content))
})

// PUT /messages
// Required Data:
// - STRING last_name
// - STRING first_name
// - STRING type
router.put('/:id', async (req, res) => {
  res.send(await service.update(req.params.id, req.body.last_name, req.body.first_name, req.body.type))
})

// DELETE /sales-transactions/:id
router.delete('/:id', async (req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /sales-transactions
// Required Data:
// - [STRING] id_range
router.delete('/', async (req, res) => {
  res.send(await service.delete(req.body.id_range))
})

// DELETE /inactive
// Description: Deletes all members with column activity = INACTIVE
router.delete('/inactive', async (req, res) => {
  res.send(await service.deleteInactive())
})
module.exports = router