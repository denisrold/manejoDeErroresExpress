const express = require("express");
const morgan = require("morgan");
const resError = require("./utils/resError");

const server = express();
server.use(morgan("dev"));
server.use(express.json());
//Tambien se puede usar el index de esta forma.
server.use(require("./routes"));

//express sabra que esta funcion sera un manejador de errores porque tendra 4 parametros.
server.use((err, req, res, next) => {
  //Asi es como to le hago mandar en los errores lo que yo quiero. soluciono el Error Trace
  const { statusCode, message } = err; //destructuring
  resError(res, message, statusCode); // y le paso la info a mi controlador de respuesta deerrores
});

module.exports = server;
