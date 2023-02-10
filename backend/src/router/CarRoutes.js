const express = require('express')
const router = express.Router()

const multer = require("multer");
const uploadConfig = require('../middleware/UploadImg')
const upload = multer({ storage: uploadConfig.storage });

const CarController = require('../controller/CarController')

router.get('/all', CarController.all)
router.post('/create', upload.single("foto"), CarController.create)

module.exports = router;