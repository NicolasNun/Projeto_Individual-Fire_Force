/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

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
idPontuacao INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
pontuacao INT,
percentualPontuacao FLOAT,
CONSTRAINT fkUsuarioPoint FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
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


SELECT * FROM usuario;

SELECT COUNT(Usuario.fkPersonagem) as voto, Personagem.nomePersonagem AS personagem 
FROM Usuario JOIN Personagem ON  personagem.idPersonagem = usuario.fkPersonagem group by usuario.fkPersonagem;


/*
comando para sql server - banco remoto - ambiente de produção
*/

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY IDENTITY(1,1),
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT FOREIGN KEY REFERENCES aquario(id)
);

/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
