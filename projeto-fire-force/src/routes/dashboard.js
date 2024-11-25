var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/listar_quantidade_usu", function (req, res) {
  dashboardController.listar_quantidade_usu(req, res);
});

router.get("/mais_votado", function (req, res) {
  dashboardController.mais_votado(req, res);
});

router.get("/numero_votos", function (req, res) {
  dashboardController.numero_votos(req, res);
});

router.get("/grafi_pontos", function (req, res) {
  dashboardController.grafi_pontos(req, res);
});

router.get("/qtd_fire_cash", function (req, res) {
  dashboardController.qtd_fire_cash(req, res);
});

module.exports = router;