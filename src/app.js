const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const users = require("./routes/user");
const articles = require("./routes/article");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/user", users);
app.use("/article", articles);

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
