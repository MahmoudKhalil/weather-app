const express = require('express')

const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')

const app = express()

app.get('/weather', (req, res) => {
    const address = req.query.address
    geocode(address, (geocodeError, locationObj) => {
        if(geocodeError) {
            return res.send({
                error: geocodeError
            })
        }

        forecast(locationObj, (forecastError, data) => {
            if(forecastError) {
                return res.send({
                    error: forecastError
                })
            }

            res.send(data)
        })
    })
})

app.get('*', (req, res) => {
    res.send({
        code: '404',
        error: "This page isn't found"
    })
})

app.listen(3000, () => {
    console.log('The server is up and running')
})