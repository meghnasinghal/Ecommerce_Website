const express = require('express')
const app = express()
//const mongoose = require('mongoose')

//mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true , useUnifiedTopology: true })
//const db = mongoose.connection
//db.on('error', (error) => console.error(error))
//db.once('open', () => console.log('Connected to Database'))

app.listen(3000, () => console.log('Server Started'))

app.use(express.static('views'))