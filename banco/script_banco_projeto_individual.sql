CREATE DATABASE projeto_individual;

USE projeto_individual;

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nomePersonagem VARCHAR(45)
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
senha VARCHAR(16) NOT NULL,
fkPersonagem INT,
CONSTRAINT fkPersonagemUsuario FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
) AUTO_INCREMENT = 20;

CREATE TABLE pontuacao (
idPontuacao INT AUTO_INCREMENT,
fkUsuario INT,
pontuacao INT,
perPoint FLOAT,
CONSTRAINT fkUsuarioPoint FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkCompostaPoint PRIMARY KEY (idPontuacao, fkUsuario)
) AUTO_INCREMENT = 50;

INSERT INTO personagem VALUES
	(NULL, 'Arthur Boyle'),
	(NULL, 'Shinra Kusakabe'),
    (NULL, 'Benimaru Shinmon'),
	(NULL, 'Akitaru Obi'),
	(NULL, 'Joker'),
	(NULL, 'Maki Oze'),
	(NULL, 'Iris'),
	(NULL, 'Tamaki Kotatsu');