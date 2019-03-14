const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("hellou");
});

module.exports = routes;
