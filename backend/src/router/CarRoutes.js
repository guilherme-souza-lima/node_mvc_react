const express = require('express')
const router = express.Router()

const jwtValidation = require('../middleware/AuthorizationJWT')

const multer = require("multer");
const uploadConfig = require('../middleware/UploadImg')
const upload = multer({ storage: uploadConfig.storage });

const CarController = require('../controller/CarController')

router.get('/all', CarController.all)
router.post('/create', jwtValidation.testValidate, upload.single("foto"), CarController.create)
router.delete('/:id', jwtValidation.testValidate, CarController.delete)
router.get('/:id', jwtValidation.testValidate, CarController.byId)
router.put('/:id', jwtValidation.testValidate, CarController.update)

module.exports = router;