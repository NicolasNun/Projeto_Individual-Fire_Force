-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE projeto_individual;

USE projeto_individual;

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nomePersonagem VARCHAR(45)
);

INSERT INTO personagem VALUES
	(NULL, 'Shinra Kusakabe'),
	(NULL, 'Arthur Boyle'),
    (NULL, 'Benimaru Shinmon'),
	(NULL, 'Joker'),
	(NULL, 'Akitaru Obi'),
	(NULL, 'Maki Oze'),
	(NULL, 'Iris'),
	(NULL, 'Tamaki Kotatsu');

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
senha VARCHAR(16) NOT NULL,
fkPersonagem INT NOT NULL,
CONSTRAINT fkPersonagemUsuario FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
);
    
CREATE TABLE pontuacao (
idPontuacao INT AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT fkPontuacaoUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkPontuacaoUsuario PRIMARY KEY (idPontuacao, fkUsuario),
pontuacao INT
);

CREATE TABLE saldo (
fkUsuario INT PRIMARY KEY,
CONSTRAINT fkSaldoUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
fireCash INT
);