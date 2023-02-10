const env = require('../configEnv')
const mongoose = require('mongoose')

mongoose.set("strictQuery", true);
const url = `mongodb://${env.database.mongo.user}:${env.database.mongo.password}@${env.database.mongo.server}:${env.database.mongo.port}/${env.database.mongo.database}?authSource=admin`

// const url = 'mongodb://root:root@127.0.0.1:27017/challenge_cars?authSource=admin'
mongoose.connect( url, { useNewUrlParser: true } );

module.exports = mongoose;