const express = require("express");
const queries = require("../queries/article");
const router = express();
const upload = require("../photos/multer");
const auth = require("../auth/auth");
router.post("/create", auth.authenticateToken, upload.single("image"), async (req, res) => {
    let article = {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: req.file.originalname,
    };
    let Article = await queries.createArticle(
      article.title,
      article.description,
      article.price,
      article.image
    );
    return res.sendStatus(201);
  }
);

router.get("/articles", auth.authenticateToken, async (req, res) => {
  let articles = await queries.getArticles();
  if (articles.length == 0) return res.sendStatus(404);
  else return res.status(200).json(articles);
});

router.get("/article/:id", auth.authenticateToken, async (req, res) => {
  let id = req.params.id;
  let article = await queries.getArticle(id);
  if (article == undefined) return res.sendStatus(404);
  else return res.status(200).json(article);
});

router.put("/update/:id", auth.authenticateToken, async (req, res) => {
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

router.delete("/delete/:id", auth.authenticateToken, async (req, res) => {
  let id = req.params.id;
  let result = await queries.deleteArticle(id);
  if (result.affectedRows == 0) return res.sendStatus(404);
  else return res.sendStatus(202);
});

module.exports = router;
