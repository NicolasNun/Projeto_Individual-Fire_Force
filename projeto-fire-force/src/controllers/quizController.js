var usuarioModel = require("../models/quizModel");

function placar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var pontos = req.body.pontosServer;

  if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está undefined!");
  } else if (pontos == undefined) {
    res.status(400).send("Sua pontos está indefinida!");
  } else {
    usuarioModel.placar(idUsuario, pontos).then(function (resposta) {
      res.status(200).send("função noiva");
    });
  }
}

module.exports = {
  placar,
};
