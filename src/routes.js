const routes = require("express").Router();

const { User } = require("./app/models");

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "wagner",
    email: "wagner@testes.com",
    password_hash: "1244"
  });

  return res.json({ user });
});

module.exports = routes;
