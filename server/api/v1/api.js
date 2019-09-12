/*
* This is the API layer. This module serves as an entry point for
* all the end points for V1 of the API.
* This will allow versioning without breaking the API.
*
* In Each API version there is a route directory,
* Which breaks down the api further so its more domain specific
*
* This module should not include any api request response! Rather it is
* a middle wear that redirects to the correct route
*/
const express = require("express");
// FIXME: the userAPI is a representation of how this template is organized. Feel free to take it out
const userAPI = require("./routes/user/userAPI");

const api = express.Router();

api.use("/user", userAPI);

module.exports = api;