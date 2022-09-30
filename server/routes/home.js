const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.redirect('http://localhost:3000');
})

module.exports = app;