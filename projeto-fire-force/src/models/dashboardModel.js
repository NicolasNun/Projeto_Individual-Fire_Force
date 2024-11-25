var database = require("../database/config");

function listar_quantidade_usu() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT COUNT(idusuario) AS qtdUsu FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function mais_votado() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    SELECT COUNT(Usuario.fkPersonagem) as voto, Personagem.* FROM Usuario JOIN Personagem ON  personagem.idPersonagem = usuario.fkPersonagem GROUP BY usuario.fkPersonagem ORDER BY voto DESC LIMIT 1;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function numero_votos() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    SELECT COUNT(Usuario.fkPersonagem) as voto, Personagem.* FROM Usuario RIGHT JOIN Personagem ON  personagem.idPersonagem = usuario.fkPersonagem GROUP BY personagem.idPersonagem ORDER BY voto DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function grafi_pontos() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    SELECT COUNT(fkUsuario) as qtd_usu ,pontuacao FROM pontuacao GROUP BY pontuacao;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function qtd_fire_cash() {
  console.log(
    "ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    SELECT fireCash, usuario FROM saldo RIGTH JOIN Usuario ON fkUsuario = idUsuario ORDER BY fireCash DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar_quantidade_usu,
  mais_votado,
  numero_votos,
  grafi_pontos,
  qtd_fire_cash,
};
