const { time } = require("console");
const express = require("express");

let app = express.Router();

let timezone = require("../models/controll");

app.post("/", (req, res) => {

    console.log("Body", req.body);
    let data = timezone.convertTimeZone(req.body);
    // res.redirect("/");
    // res.render("index");
    res.send(data);
});

module.exports = app;