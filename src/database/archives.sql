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
    descVtuber VARCHAR(1000),
    dtDebutVtuber DATE,
    fanName VARCHAR(45),
    oshiMark VARCHAR(3),
    ilustrador VARCHAR(45),
    modelVtuber VARCHAR(154) DEFAULT '/assets/Logo.svg',
    fkAgencia INT DEFAULT 1,
    fkGeracao INT,
    FOREIGN KEY (fkAgencia) REFERENCES agencia(idAgencia),
    FOREIGN KEY (fkGeracao) REFERENCES geracao(idGeracao)
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
    idContato INT PRIMARY KEY AUTO_INCREMENT,
    emailContato VARCHAR(156) NOT NULL,
    assuntoContato VARCHAR(45),
    msgContato VARCHAR(1000),
    dtContato DATETIME NOT NULL
);

INSERT INTO agencia(nomeAgencia, logoAgencia)
VALUES  ('Independente', '/assets/Logo.svg'),
        ('V-Dere', '/assets/agencias/vdere-icon.png');

INSERT INTO geracao(nomeGeracao, fkAgencia)
VALUES ('Gen 1', 2);

INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao)
VALUES  ('Elia Stellaria', 'Elia Stellaria is an independent female English-speaking Virtual YouTuber. Together with Mozumi Pichi, Airi Viridis and kirispica, she is part of the group V-Dere. Closely related to the "This banana" cult.' , '2023-09-30', 'Starling and Stananas', '💌✨', 'Loulou_lou', '/assets/vtubers/Elia_V-Dere_Portrait.png', 2, 1),
        ('Airi Viridis', 'Airi Viridis is an independent female English-speaking Virtual YouTuber with a focus on ASMR scenarios, table-top roleplaying/RPGs and general gameplay content. Together with Elia Stellaria, kirispica and Mozumi Pichi, she is part of the group V-Dere.' , '2023-04-12', '', '🩰🦇', 'Hitsu', '/assets/vtubers/Airi_V-Dere_Portrait.png', 2, 1),
        ('Mozumi Pichi', 'Mozumi Pichi (formerly Gezu Gezu) is an independent female English-speaking Virtual YouTuber. Together with Airi Viridis, Elia Stellaria, and kirispica, she is part of the group V-Dere.' , '2023-09-29', 'Mozzumites', '🍹', 'Ayaoshiro', '/assets/vtubers/Mozumi_V-Dere_Portrait.png', 2, 1),
        ('Kirispica', 'kirispica is an independent female English-speaking Virtual YouTuber and VSinger. Together with Airi Viridis, Elia Stellaria, and Mozumi Pichi, she is part of the group V-Dere.' , '2021-09-19', '', '💭💗', 'Azit', '/assets/vtubers/Spica_V-Dere_Portrait.png', 2, 1);