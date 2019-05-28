const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
//User model
const User = require("../models/User");

//login page
router.get("/login", (req, res) => res.render("login"));
//register page
router.get("/register", (req, res) => res.render("register"));

//register handle

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  //check required fields
  if (!name || !email || !password || password2) {
    errors.push({ msg: "please fill in all fields" });
  }
  //check if passwords match
  if (password != password2) {
    errors.push({ msg: "passwords do not match" });
  }

  //check pass length
  if (password.length < 6) {
    errors.push({ msg: "password should be atleast 6 characters" });
  }

  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    //validation passed
    User.findOne({ email: email }).then(user => {
      if (user) {
        //user exists
        errors.push({ msg: "Email aldready exists" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        console.log(newUser);
        res.send("hello");
      }
    });
  }
});

module.exports = router;
