const { Router } = require("express");
const { moviesControllers } = require("../controllers/index");
const router = Router();

router.get("/movies", moviesControllers.getMovies);

router.get("/movies/:id", moviesControllers.getMovieById);

module.exports = router;
