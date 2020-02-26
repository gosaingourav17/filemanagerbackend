const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const crud = require('./api/routes/crud')
const upload = require("express-fileupload");
var fs = require('fs');

app.use(upload());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(express.static('public'));


app.use('/crud', crud);

module.exports = app;
