const express = require('express')
const cors = require('cors')
const env = require('./config/configEnv')
const server = express()

server.use(cors())
server.use(express.json())

const CarRoutes  = require('./router/CarRoutes');
server.use('/car',  CarRoutes);

server.get("/status",(req, res) => {
    res.json({ 
        status: env.title
    })
})
    

server.listen(env.server.app.port, () => {
    console.log('API ONLINE')
});