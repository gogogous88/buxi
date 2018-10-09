const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./routes/Router");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  "mongodb://buxi:buxi1234567890@ds227373.mlab.com:27373/buxi",
  { useNewUrlParser: true }
);

app.get("/", (req, res) => {
  res.render("index", { title: "Foo", username: "markmoo" });
});

router(app);

app.listen(3000);
