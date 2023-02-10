const mongoose = require('../config/database/database')
const Schema = mongoose.Schema

const CarSchema = new Schema({
    nome:   { type: String, required: true },
    marca:  { type: String, required: true },
    modelo: { type: String, required: true },
    ano:    { type: String, required: true },
    foto:   { type: String, required: true },
    preco:  { type: Number, required: true},
    criado: { type: Date,   default: Date.now() }
})

module.exports = mongoose.model('Car', CarSchema)
