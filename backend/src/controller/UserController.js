const { response } = require('express')
const UserModel = require('../model/UserModel')
const JwtRole = require('../middleware/AuthorizationJWT')

class UserController {
    async create (req, res) {
        const user = new UserModel(req.body)
        await user.save()
        .then( response => {
            return res.status(200).json(response)
        })
        .catch( error => {
            return res.status(500).json(error)
        })
    }

    async login (req, res) {
        await UserModel
        .find({
            usuario: { '$in': req.body.usuario },
            senha: { '$in': req.body.senha }
        })
        .then( response => {
            if (response.length == 0)
            return res.status(200).json("Não Encontrado.")

            const token = JwtRole.generate(response[0].nome, response[0].usuario, response[0].senha, response[0]._id.toString())
            return res.status(200).json(token)

        })
        .catch( error => {
            return res.status(500).json(error)
        })

    } 
}

module.exports = new UserController()