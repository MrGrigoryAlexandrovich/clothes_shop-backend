const express = require("express");
const queries = require("../db/queries");
const router = express();

router.post("/create", async (req, res) => {
  let user = {
    username: req.body.username,
    password: req.body.password,
    adminLevel: 0,
  };
  let User = await queries.create(
    user.username,
    user.password,
    user.adminLevel
  );
  return res.sendStatus(201);
});

router.get("/users", async (req, res) => {
  let users = await queries.getAll();
  if (users.length == 0) return res.sendStatus(404);
  else return res.status(200).json(users);
});

router.get("/user/:id", async (req, res) => {
  let id = req.params.id;
  let user = await queries.getOne(id);
  if (user == undefined) return res.sendStatus(404);
  else return res.status(200).json(user);
});

router.patch("/update", async (req, res) => {
  let user = {
    adminLevel: req.body.adminLevel,
    id: req.body.id,
  };
  let result = await queries.update(user.adminLevel, user.id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.status(200).end("UPDATED");
});

router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let result = await queries.delete(id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

module.exports = router;
