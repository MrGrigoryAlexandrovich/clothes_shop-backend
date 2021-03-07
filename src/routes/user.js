const express = require("express");
const bcrypt = require("bcrypt");
const queries = require("../queries/user");
const router = express();

router.post("/create", async (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
    adminLevel: 0,
  };

  let username = await queries.getUserByName(user.username);
  if (username !== undefined) return res.sendStatus(403);
  const HashedPW = await bcrypt.hash(req.body.password, 8);
  let User = await queries.createUser(user.username, HashedPW, user.adminLevel);
  return res.sendStatus(201);
});

router.post("/login", async (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
  };
  let User = await queries.getUserByName(user.username);
  if (User === undefined) return res.sendStatus(404);
  else {
    const match = await bcrypt.compare(user.password, User.password);
    if (match) {
      return res.sendStatus(200);
    } else return res.sendStatus(403);
  }
});
router.get("/users", async (req, res) => {
  let users = await queries.getUsers();
  if (users.length == 0) return res.sendStatus(404);
  else return res.status(200).json(users);
});

router.get("/user/:id", async (req, res) => {
  let id = req.params.id;
  let user = await queries.getUserById(id);
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
