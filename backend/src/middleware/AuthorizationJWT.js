const jwt = require("jsonwebtoken")
const env = require('../config/configEnv')

const chavePrivada = env.jwt.key

class JwtRole {
    generate(nome, email, id) {
        const dadosUsuario = {
            nome: nome,
            email: email,
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
}

module.exports = new JwtRole()