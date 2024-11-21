var database = require("../database/config")

function entrar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(usuario, email, senha, fkPersonagem) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    usuario,
    email,
    senha,
    fkPersonagem
  );
  var instrucao = `
        INSERT INTO usuario (usuario, email, senha, fkPersonagem) VALUES ('${usuario}', '${email}', '${senha}', '${fkPersonagem}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar
};