const express = require('express')
require('./utils/db');
const app = express()

//Routes
/*app.get('/', (req,res) => {
    res.send('Response sent')
}) */

app.listen(3000, () => console.log('Server Started'))

app.use(express.static('views'))