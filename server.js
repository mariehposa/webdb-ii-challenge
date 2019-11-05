const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.get('/', (req, res) => res.send('This works'))

module.exports = server;