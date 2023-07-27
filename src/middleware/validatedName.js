const { ClientError } = require("../utils/errors");

const validatedName = (req, res, next) => {
  const { name } = req.query;
  console.log(name);
  if (name && name.includes("@")) throw new ClientError("Invalid Name", 400);
  next();
};

module.exports = validatedName;
