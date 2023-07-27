//FUNCION DE ORDEN SUPERIOR

//ASI SE TERMINA CON TODOS LOS TRY CATCHS.
//recibe por parametros la funcion.
const catchedAsync = (fn) => {
  //retorna una funcion middleware
  return (req, res, next) => {
    //lama ala funcion con esa req y esa res y si  la promesa tiene un error, la recibe con el catch ese error llo manda
    // con el next(err) al manejador interno de errores de express.
    fn(req, res).catch((err) => next(err));
    //el catch recibe el error y a ese error lo manda al manejador de errores de express.
  };
};

module.exports = catchedAsync;

//FUNCION DE ORDEN SUPERIOR: FUNCION QUE RECIBE UNA FUNCION Y O RETORNA UNA FUNCION
//RECIBO UNA FUNCION LE HAGO UN RETOQUE LA MEJORO Y LA RETORNO.
//RECIBO UNA FUNCION QUE ES TOQUETEADA MEJORADA.
//LA TUNEO LA RETORNO MEJORADA Y AUTOCACHEADA.

// Y ADEMAS EN ESTE CASO LE TIRO DIRECTAMENTE AL MANEJADORES DE ERRORES DE EXPRESS EL ERROR A TRAVEZ DEL CATCH
