const express = require('express')
const router = express.Router()

// GET all workouts
router.get('/', async (req, res) => {
    const message = {
        message: 'All works'
    }

    res.status(200).json(message)
  })

  module.exports = router

  