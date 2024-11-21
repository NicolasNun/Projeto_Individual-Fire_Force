var database = require("../database/config");

function placar(idUsuario, pontos) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    idUsuario,
    pontos
  );
  var instrucao = `
        INSERT INTO pontuacao (fkUsuario, pontuacao) VALUES (${idUsuario}, ${pontos});
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  placar,
};
