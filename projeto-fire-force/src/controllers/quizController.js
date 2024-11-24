var usuarioModel = require("../models/quizModel");

function pontuar(req, res) {
  var idUsuario = req.body.idUsuarioServer;
  var pontos = req.body.pontosServer;

  if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está undefined!");
  } else if (pontos == undefined) {
    res.status(400).send("Sua pontos está indefinida!");
  } else {
    usuarioModel.pontuar(idUsuario, pontos).then(function (resposta) {
      res.status(200).send("função noiva");
    });
  }
}

module.exports = {
  pontuar,
};
