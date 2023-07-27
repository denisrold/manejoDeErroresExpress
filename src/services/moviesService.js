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
  if (!movie) throw Error("Invalid ID");
  return movie;
};

module.exports = {
  getAllMovies,
  getMovieById,
};
