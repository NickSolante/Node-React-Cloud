const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();

//DB config

const db = require("./config/keys").MongoURI;

//Bodyparser

app.use(express.urlencoded({ extended: false }));

//express session

//connect to mongo

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server start on ${PORT}`));
