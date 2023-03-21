var express = require("express");
var router = express.Router();

const formContents = [{ hi: "hello" }];
router.get("/", function (req, res, next) {
  res.render("form", { formContents: formContents });
});

module.exports = router;
