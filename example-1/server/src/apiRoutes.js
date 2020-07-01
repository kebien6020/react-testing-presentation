const express = require('express')
const router = express.Router()
const { db, saveDb } = require('./db')

router.get('/todos', async (req, res, next) => {
  try {
    res.json({ data: db.content.todos })
  } catch (err) {
    next(err)
  }
})

router.post('/todos', async (req, res, next) => {
  try {
    const todo = req.body

    Array.prototype.push.call(db.content.todos, todo)
    await saveDb()

    res.json({})
  } catch (err) {
    next(err)
  }
})

router.get('/todos/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const todo = db.content.todos[id]

    if (!todo) {
      res.status(404).json({ error: { message: 'Todo not found' } })
      return
    }

    res.json({ data: todo })
  } catch (err) {
    next(err)
  }
})

router.put('/todos/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const todo = db.content.todos[id]
    const patch = req.body

    Object.entries(patch).map(([key, val]) => {
      todo[key] = val
    })

    await saveDb()

    res.json({})
  } catch (err) {
    next(err)
  }
})

router.delete('/todos/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    delete db.content.todos[id]
    await saveDb()

    res.json({})
  } catch (err) {
    next(err)
  }
})

module.exports = router
