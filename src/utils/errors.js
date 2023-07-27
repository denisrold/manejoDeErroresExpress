//Creo una clase error de clientes  que hereda de la clase ERROR
class ClientError extends Error {
  //EL PARAMETRO ES EL MENSAJE DEL ERROR DE THROWS ERRORS y status sera 400 por defecto si no me mandan el status
  constructor(message, status = 400) {
    //super es el constructor de la clase de la que heredamos.
    super(message);
    this.statusCode = status;
  }
}

//TAMBIEN PUEDO TENER ERRORES MAS ESPECIFICOS Y NO TAN GENERICOS:
class AuthClientError extends Error {
  //
}

module.exports = { ClientError };

//PUEDO USAR ESTA CLASE EN MIS SERVICIOS
