const { Router } = require("express");
const { moviesControllers } = require("../controllers/index");
const validatedName = require("../middleware/validatedName");
const router = Router();

//LE PASO EL MIDDLEWARE DE VALIDACIONES. ANTES DE HACER NEXT A MOVIESCONTROLLERS.GETMOVIES
router.get("/movies", validatedName, moviesControllers.getMovies);

router.get("/movies/:id", moviesControllers.getMovieById);

module.exports = router;
