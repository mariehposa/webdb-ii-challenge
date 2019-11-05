const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const db = require('./dbAccess/carsModel')

const server = express()
server.use(express.json())
server.use(cors())
server.use(helmet())


server.get('/api/cars', (req, res) => {
    db.get()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({message: err.message}))
})
server.get('/', (req, res) => res.send('This works'))

module.exports = server;