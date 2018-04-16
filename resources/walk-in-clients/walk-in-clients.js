let router = require('express').Router()
let service = require('./service')

// GET /walk-in-clients
router.get('/', async (req, res) => {
  res.send(await service.get())
})

// GET /walk-in-clients/:id
router.get('/:id',  async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /walk-in-clients
// Required Data:
// - STRING content
router.post('/', async (req, res) => {
  res.send(await service.add(req.body.content))
})

// PUT /walk-in-clients
// Required Data:
// - STRING last_name
// - STRING first_name
// - STRING type
router.put('/:id', async (req, res) => {
  res.send(await service.update(req.params.id, req.body.last_name, req.body.first_name, req.body.type))
})


// DELETE /walk-in-clients/:id
router.delete('/:id', async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /walk-in-clients
// Required Data:
// - [STRING] id_range
router.delete('/', async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router