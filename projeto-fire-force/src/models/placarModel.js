var database = require("../database/config");

function listar_pontos() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPontuacao()"
  );
  var instrucao = `
        SELECT usuario, pontuacao, (pontuacao * 10) AS percent FROM pontuacao JOIN usuario ON fkUsuario = idUsuario ORDER BY idPontuacao DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function podio() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPontuacao()"
  );
  var instrucao = `
        SELECT usuario, fkPersonagem, pontuacao FROM pontuacao JOIN usuario ON fkUsuario = idUsuario ORDER BY  pontuacao  DESC LIMIT 3;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function maisRico() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPontuacao()"
  );
  var instrucao = `
    select usuario, fkPersonagem from usuario join saldo on idUsuario = fkUsuario where fireCash = (select max(fireCash) from saldo);
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar_pontos,
  podio,
  maisRico,
};
