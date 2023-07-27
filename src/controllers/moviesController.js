const { moviesService } = require("../services");
//CON CATCHED ASYNC ME LIBERO DE LOS TRYCATCH
const { catchedAsync } = require("../utils/index");

const getMovies = async (req, res, next) => {
  //Maneja la logica de negocio de la peticion que recibio
  //Tiene que obtener informacion de peliculas y responder al cliente con ellas.
  //LA INFORMACION DE PELICULAS SE LA PROVEE EL SERVICIO
  const movies = await moviesService.getAllMovies();
  res.status(200).json(movies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.getMovieById(id);
  res.status(200).json(movie);
};

module.exports = {
  //Le paso el manejador de errores cuando lo exporto.
  getMovies: catchedAsync(getMovies),
  //Entonces cada funcion sera "la funcion que me retorna ya pasada por el catch" cuando la invoco.
  getMovieById: catchedAsync(getMovieById),
};
