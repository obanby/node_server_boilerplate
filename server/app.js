// Core module
const path = require("path");
const bodyParser = require('body-parser');
// NPM
const express = require("express");
const dotEnv = require("dotenv").config();
// Custom modules
const api = require("./api/v1/api");

const app = express();

// TODO: import logging and error handling custom lib here
if (dotEnv.error) {
    throw Error(JSON.stringify({
        message: "dotenv configuration failed to load",
        error: dotEnv.error,
        module: "app.js"
    })).toString();
}

const PUBLIC = path.resolve(".", "public");

app.use("/", express.static(PUBLIC));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use("/api/v1", api);

app.use("/*", express.static(`${PUBLIC}/404.html`));

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));