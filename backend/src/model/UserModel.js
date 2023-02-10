const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome:   { type: String, require: true },
    usuario:{ type: String, require: true },
    senha:  { type: String, require: true },
    adm:    { type: Boolean,default: true },
    criado: { type: Date,   default: Date.now() }
})

module.exports = mongoose.model('User', UserSchema);