const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(require("./controllers/dishes"));
app.use(require("./controllers/newdish"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
