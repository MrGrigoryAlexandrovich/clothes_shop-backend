const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/user");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
