var express = require("express");
var router = express.Router();

var placarController = require("../controllers/placarController");

router.get("/listar_pontos", function (req, res) {
  placarController.listar_pontos(req, res);
});

router.get("/podio", function (req, res) {
  placarController.podio(req, res);
});

router.get("/maisRico", function (req, res) {
  placarController.maisRico(req, res);
});

module.exports = router;