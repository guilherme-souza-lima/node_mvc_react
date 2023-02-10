require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set("strictQuery", true);
const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`
mongoose.connect( url, { useNewUrlParser: true } );

module.exports = mongoose;