var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/pontuar", function (req, res) {
  quizController.pontuar(req, res);
});

module.exports = router;