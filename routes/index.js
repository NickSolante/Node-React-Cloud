const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("welcome to the server"));

module.exports = router;
