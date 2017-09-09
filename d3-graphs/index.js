const express = require('express');
const app = express()

app.use(express.static('static'))

console.log('Listening on 8001');
app.listen('8001');