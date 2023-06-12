var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/listar_quantidade_usu", function (req, res) {
    usuarioController.listar_quantidade_usu(req, res);
});

router.get("/mais_votado", function (req, res) {
    usuarioController.mais_votado(req, res);
});

router.get("/numero_votos", function (req, res) {
    usuarioController.numero_votos(req, res);
});

router.post("/placar", function (req, res) {
    usuarioController.placar(req, res);
});

router.get("/listar_pontos", function (req, res) {
    usuarioController.listar_pontos(req, res);
});

router.get("/podio", function (req, res) {
    usuarioController.podio(req, res);
});

router.get("/primeiro_a_gabaritar", function (req, res) {
    usuarioController.primeiro_a_gabaritar(req, res);
});

router.get("/grafi_pontos", function (req, res) {
    usuarioController.grafi_pontos(req, res);
});

module.exports = router;