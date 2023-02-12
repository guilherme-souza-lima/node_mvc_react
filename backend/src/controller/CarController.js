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

    async create (req, res) {
        const car = new CarModel(req.body)
        car.foto=req.file.filename
        await car.save()
        .then( response => {
            return res.status(200).json(response)
        })
        .catch( error => {
            return res.status(500).json(error)
        })
    }

    async delete (req, res) { 
        await CarModel
        .deleteOne({'_id': req.params.id})
        .then( response => {
            return res.status(200).json(response)
        })
        .catch( error => {
            return res.status(500).json(error)
        })
    }
}

module.exports = new CarController()