// Core module
const path = require("path");
const bodyParser = require('body-parser');
// NPM
const express = require("express");
const dotEnv = require("dotenv").config();
const Loggy = require("@elbanby/loggy");
// Custom modules
const api = require("./api/v1/api");

const app = express();

 if (dotEnv.error) {
     Loggy.error("dotenv configuration failed to load", dotEnv.error, __filename);
     process.exit(1);
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