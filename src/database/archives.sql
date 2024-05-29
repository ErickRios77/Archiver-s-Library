CREATE DATABASE archives;
USE archives;

CREATE TABLE agencia(
	idAgencia INT PRIMARY KEY AUTO_INCREMENT,
    nomeAgencia VARCHAR(45) NOT NULL,
    logoAgencia VARCHAR(256),
    filialAgencia INT,
    FOREIGN KEY (filialAgencia) REFERENCES agencia(idAgencia)
);

CREATE TABLE geracao(
	idGeracao INT AUTO_INCREMENT,
    nomeGeracao VARCHAR(45) NOT NULL,
    fkAgencia INT NOT NULL,
    FOREIGN KEY (fkAgencia) REFERENCES agencia(idAgencia),
    PRIMARY KEY (idGeracao, fkAgencia)
);

CREATE TABLE vtuber(
	idVtuber INT PRIMARY KEY AUTO_INCREMENT,
    nomeVtuber VARCHAR(45) NOT NULL,
    descVtuber VARCHAR(200),
    dtDebutVtuber DATE,
    fanName VARCHAR(45),
    oshiMark VARCHAR(3),
    ilustrador VARCHAR(45),
    fkAgencia INT,
    fkGeracao INT,
    FOREIGN KEY (fkAgencia) REFERENCES agencia(idAgencia),
    FOREIGN KEY (fkGeracao) REFERENCES geracao(idGeracao)
);

CREATE TABLE modelVtuber(
	idModel INT,
    enderecoModel VARCHAR(154),
    fkVtuber INT UNIQUE,
    FOREIGN KEY (fkVtuber) REFERENCES vtuber(idVtuber),
    PRIMARY KEY (idModel, fkVtuber)
);

CREATE TABLE apelidos(
	idApelido INT AUTO_INCREMENT,
    apelido VARCHAR(45) NOT NULL,
    fkVtuber INT NOT NULL,
    FOREIGN KEY (fkVtuber) REFERENCES vtuber(idVtuber),
    PRIMARY KEY (idApelido, fkVtuber)
);

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45) NOT NULL UNIQUE,
    emailUsuario VARCHAR(156) NOT NULL UNIQUE,
    senhaUsuario VARCHAR(200) NOT NULL,
    generoUsuario CHAR(1),
    dtNasc DATE,
    nacionalidade VARCHAR(45),
    dtCadastro DATETIME NOT NULL,
    oshi INT,
    FOREIGN KEY (oshi) REFERENCES vtuber(idVtuber)
);

CREATE TABLE historicoLogin(
    idLogin INT AUTO_INCREMENT,
    dtLogin DATETIME,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    PRIMARY KEY (idLogin, fkUsuario)
);

CREATE TABLE contato(
    idContato INT PRIMARY KEY,
    emailContato VARCHAR(156) NOT NULL,
    assuntoContato VARCHAR(45),
    msgContato VARCHAR(200),
    dtContato DATETIME NOT NULL
);