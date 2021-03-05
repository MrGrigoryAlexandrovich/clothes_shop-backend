const express = require("express");
const queries = require("../queries/user");
const router = express();

router.post("/create", async (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
    adminLevel: 0,
  };
  let User = await queries.createUser(
    user.username,
    user.password,
    user.adminLevel
  );
  return res.sendStatus(201);
});

router.get("/users", async (req, res) => {
  let users = await queries.getUsers();
  if (users.length == 0) return res.sendStatus(404);
  else return res.status(200).json(users);
});

router.get("/user/:id", async (req, res) => {
  let id = req.params.id;
  let user = await queries.getUser(id);
  if (user == undefined) return res.sendStatus(404);
  else return res.status(200).json(user);
});

router.patch("/update/:id", async (req, res) => {
  let user = {
    adminLevel: req.body.adminLevel,
    id: req.params.id,
  };
  let result = await queries.updateUser(user.adminLevel, user.id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let result = await queries.deleteUser(id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

module.exports = router;
