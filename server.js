const express = require("express");
const passport = require("passport");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(PORT, console.log(`Server start on ${PORT}`));
