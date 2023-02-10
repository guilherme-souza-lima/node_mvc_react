require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }));

const CarRoutes  = require('./router/CarRoutes');
server.use('/car',  CarRoutes);

server.get("/status",(req, res) => {
    res.json({ 
        status: "status ok."
    })
})
    

server.listen(process.env.APP_PORT, () => {
    console.log('API ONLINE')
});