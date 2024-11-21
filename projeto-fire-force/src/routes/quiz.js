var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/placar", function (req, res) {
  quizController.placar(req, res);
});

module.exports = router;