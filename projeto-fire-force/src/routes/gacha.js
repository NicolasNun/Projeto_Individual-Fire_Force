var express = require("express");
var router = express.Router();

var gachaController = require("../controllers/gachaController");

router.get("/buscarFireCash/:idUsuario", function (req, res) {
  gachaController.buscarFireCash(req, res);
});

router.put("/atualizarFireCash/:idUsuario", function (req, res) {
  gachaController.atualizarFireCash(req, res);
});

module.exports = router;