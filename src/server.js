const express = require("express");
const morgan = require("morgan");

const server = express();
server.use(morgan("dev"));
server.use(express.json());
//Tambien se puede usar el index de esta forma.
server.use(require("./routes"));

module.exports = server;
