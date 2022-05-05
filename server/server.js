const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors');

// Express config
const app = express()

app.use(cors());
app.use(require("./routes/index"))

// Connect MongoDB
const mongoService = process.env.MONGO_SERVICE || "localhost"
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoUrl = `mongodb://${mongoService}:${mongoPort}/mini-message-board`;
mongoose.connect(mongoUrl, (err) => {
    if (err) throw err;
    
    console.log(`MongoDB running at port ${mongoPort}`);
})

// Connect server
const serverPort = process.env.PORT || 8000;
app.listen(serverPort, (err) => {
    if (err) throw err;
    
    console.log(`Server running at port ${serverPort}`);
})
