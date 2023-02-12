const express = require("express");
let app = express.Router();
var fs = require('fs');

app.get("/", async(req, res) => {
    let timeZone = await JSON.parse(fs.readFileSync("data_api.txt"));
    res.send(timeZone);
})

module.exports = app;