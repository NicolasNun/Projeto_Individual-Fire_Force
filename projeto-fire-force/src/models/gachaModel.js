var database = require("../database/config");

function buscarFireCash(idusuario) {
  console.log(
    "ACESSEI O GACHA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT fireCash FROM saldo where fkUsuario = ${idusuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function atualizarFireCash(idusuario, novoValor) {
  console.log(
    "ACESSEI O GACHA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        update saldo set fireCash = ${novoValor} where fkUsuario = ${idusuario};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  buscarFireCash,
  atualizarFireCash,
};