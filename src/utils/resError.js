//Esto le paso al server para respuesta de errores
const resError = (res, message, status) => {
  res.status(status).json({
    error: true,
    message,
  });
};
module.exports = resError;
