//importo mis errores personalizados
const { ClientError } = require("../utils/errors");

const data = [
  {
    id: 1,
    title: "Titanic",
  },
  {
    id: 2,
    title: "La Vita Es Bela",
  },
  {
    id: 3,
    title: "Interestelar",
  },
];
const getAllMovies = async () => {
  return data;
};

const getMovieById = async (id) => {
  const movie = data.find((e) => {
    return e.id == id;
  });
  //si se da cuenta que la pelicula no esta, arrojo un error, pero no un throw Error("Invalid ID"); arrojo un error de mi clase personalizada
  if (!movie) throw new ClientError("Invalid ID", 401);
  //el estatus podria ser cualquiera, recordar que es por defecto 400
  return movie;
};

const getMoviesByName = async (name) => {
  const movie = data.filter((e) => {
    return e.title == name;
  });
  //  if (!movie) throw new ClientError("Invalid Name", 401); Esto no, porque la busqueda que no arroja resultado no es un error.
  //es una buqueda sin resultados nada mas.
  return movie;
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesByName,
};
