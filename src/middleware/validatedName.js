const { ClientError } = require("../utils/errors");
//Estas validaciones las paso en el index.js de routes como midleware antes de la funcion para querevise si la info esta correcta
const validatedName = (req, res, next) => {
  const { name } = req.query;
  console.log(name);
  //Aca lasvalidaciones serancon regex
  if (name && name.includes("@")) throw new ClientError("Invalid Name", 400);
  next();
};

module.exports = validatedName;
