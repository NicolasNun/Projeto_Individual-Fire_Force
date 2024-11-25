var gachaModel = require("../models/gachaModel");

function buscarFireCash(req, res) {
  var idUsuario = req.params.idUsuario;

  gachaModel
    .buscarFireCash(idUsuario)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao realizar a consulta! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizarFireCash(req, res) {
    var idUsuario = req.params.idUsuario;
    var novoValor = req.body.fireCash;

    if (idUsuario == undefined) {
      res.status(400).send("Seu idUsuario está undefined!");
    } else {
      gachaModel.atualizarFireCash(idUsuario, novoValor).then(function (resposta) {
        res.status(200).send("função noiva");
      });
    }

}

module.exports = {
  buscarFireCash,
  atualizarFireCash,
};
