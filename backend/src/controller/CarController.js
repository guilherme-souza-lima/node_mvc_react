//https://consolelog.com.br/upload-de-arquivos-imagens-utilizando-multer-express-nodejs/

const { response } = require('express')
const CarModel = require('../model/CarModel')

class CarController {
    async all (req, res) {
        await res.json({ 
            status: "OK"
        })
    }
}

module.exports = new CarController()