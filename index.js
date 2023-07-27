const server = require("./src/server");

server.listen(3000, console.log("Listen on PORT 3000"));

/*
Controllers -> manejaran la logica de negocio. -> para ejecutar la logica de negocio puede que se tenga que valer de distintos servicios.
Services -> Manejaran servicios puntuales. para luego inyectarlos. (inyeccion de dependencias.)
routes  -> maneja el enrutado
*/
