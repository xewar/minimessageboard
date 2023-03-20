var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    text: "Greetings",
    user: "Antoinette",
    added: moment(new Date()).format("YYYY-MM-DD"),
  },
  {
    text: "Hola",
    user: "Carlos Andrés",
    added: moment(new Date()).format("YYYY-MM-DD"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
