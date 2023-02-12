const express = require("express");
let app = express.Router();

app.get("/", async(req, res) => {
    // console.log("Home", (req.flash("msg")[0]));
    res.render("index");
})

module.exports = app;