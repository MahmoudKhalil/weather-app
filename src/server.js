const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('This is to test if the server is up and running')
})

app.listen(3000, () => {
    console.log('The server is up and running')
})