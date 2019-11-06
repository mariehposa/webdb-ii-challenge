const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const db = require('./dbAccess/carsModel')

const server = express()
server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => res.send('This works'))

server.get('/api/cars', (req, res) => {
    db.get()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({message: err.message}))
})

server.get('/api/cars/:id', validateId, (req, res) => {
    res.status(200).json(req.carGotten)
})

server.post('/api/cars/', validateBody, (req, res) => {
    db.insert(req.newCar)
    .then(data => {
        if (data) {
            res.status(201).json(data)
        } else res.status(200).json({message: 'Failed to insert new car'})
    })
    .catch(err => res.status(500).json({message: err.message}))
})

server.put('/api/cars/:id', validateId, validateBody, (req, res) => {
    db.update(req.params.id, req.newCar)
    .then(data => {
        if (data) {
            res.status(201).json(data)
        } else res.status(200).json({message: 'Failed to insert new car'})
    })
    .catch(err => res.status(500).json({message: err.message}))
})

server.delete('/api/cars/:id', validateId, (req, res) => {
   db.remove(req.carGotten.id)
    .then(car => {
        res.status(200).json(car + ' car got deleted')
    })
    .catch(err => {
        res.status(500).json({
            message: "An error occured!"
        })
    })
})

function validateId(req, res, next) {
    const { id } = req.params;
    db.get(id)
    .then(car => {
        req.carGotten = car;
        next()
    })
    .catch(err => res.status(500).json({message: err.message}))
}

function validateBody(req, res, next) {
    const {vin, make, model, mileage, transmission, status} = req.body;

    if (Object.keys(req.body).length){
        if (vin, make, model, mileage) {
            const newCar = {vin, make, model, mileage, transmission, status}
            // transmission ? newCar.transmission = transmission : null
            req.newCar = newCar;
            next()
        }
    } else {
        res.status(400).json({message: 'request body missing some parameters'})

    }
}

module.exports = server;