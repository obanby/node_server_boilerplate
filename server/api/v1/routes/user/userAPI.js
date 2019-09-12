const express = require("express");

const userAPI = express.Router();

userAPI.get("/", (req, res) => {
    res.status(200).end("user API get all [up]");
});

module.exports = userAPI;