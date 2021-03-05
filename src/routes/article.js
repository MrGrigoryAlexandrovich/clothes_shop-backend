const express = require("express");
const queries = require("../queries/article");
const router = express();

router.post("/create", async (req, res) => {
  let article = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  };
  let Article = await queries.createArticle(
    article.title,
    article.description,
    article.price
  );
  return res.sendStatus(201);
});

router.get("/articles", async (req, res) => {
  let articles = await queries.getArticles();
  if (articles.length == 0) return res.sendStatus(404);
  else return res.status(200).json(articles);
});

router.get("/article/:id", async (req, res) => {
  let id = req.params.id;
  let article = await queries.getArticle(id);
  if (article == undefined) return res.sendStatus(404);
  else return res.status(200).json(article);
});

router.put("/update/:id", async (req, res) => {
  let article = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    id: req.params.id,
  };
  let result = await queries.updateArticle(
    article.title,
    article.description,
    article.price,
    article.id
  );
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

router.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  let result = await queries.deleteArticle(id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

module.exports = router;
