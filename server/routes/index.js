const express = require('express')

const app = express()

app.use(require('./home'));
app.use(require('./message'));

module.exports = app;