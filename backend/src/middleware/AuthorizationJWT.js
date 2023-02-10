require('dotenv').config()
const jwt = require("jsonwebtoken")

const chavePrivada = process.env.JWT_KEY

class JwtRole {
    generate(nome, usuario, senha, id) {
        const dadosUsuario = {
            nome: nome,
            usuario: usuario,
            senha: senha,
            id: id
        };
        const result = jwt.sign(dadosUsuario, chavePrivada)
        return result
    }

    validate (token) {
        try {
            const result = jwt.verify(token, chavePrivada)
            return result
        } catch {
            return false
        }
        
    }

    testValidate (req, res, next) {
        try {
            const token = req.headers["authorization"]
            jwt.verify(token, chavePrivada)
            next()
        } catch {
            return res.status(500).json("invalid authorization")
        }
        
    }
}

module.exports = new JwtRole()