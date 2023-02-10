//https://consolelog.com.br/upload-de-arquivos-imagens-utilizando-multer-express-nodejs/

const { response } = require('express')
const CarModel = require('../model/CarModel')

class CarController {
    async all (req, res) {
        await CarModel.find({})
        .sort('preco')
        .then( response => {
            return res.status(200).json(response)
        })
        .catch( error => {
            return res.status(500).json(error)
        })
    }
}

module.exports = new CarController()