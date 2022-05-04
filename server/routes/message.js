const express = require('express');

const app = express();
let Message = require("../models/message")

// Get all messages
app.get('/message', (req, res) => {
    Message.find({}).exec((err, messageDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!messageDB) {
            return res.status(404).json({
                ok: false,
                message: "Couldn't find any messages"
            })
        }

        res.json({
            ok: true,
            messageDB
        })
    })
})

// Create message
app.post('/message', (req, res) => {
    let message = new Message({
        author: req.query.author,
        title: req.query.title,
        body: req.query.body
    })

    message.save((err, messageDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            messageDB
        })
    })
})

module.exports = app;