const express = require('express')
const router = express.Router()

const CarController = require('../controller/CarController')

router.get('/all', CarController.all)

module.exports = router;