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
        ('V-Dere', '/assets/agencias/vdere-icon.png')
        ('Hololive', '/assets/agencias/hololive-icon.ico');

INSERT INTO geracao(nomeGeracao, fkAgencia)
VALUES  ('Gen 1', 2)
        ('Myth', 3);

INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao)
VALUES  ('Elia Stellaria', 'Elia Stellaria is an independent female English-speaking Virtual YouTuber. Together with Mozumi Pichi, Airi Viridis and kirispica, she is part of the group V-Dere. Closely related to the "This banana" cult.' , '2023-09-30', 'Starling and Stananas', '💌✨', 'Loulou_lou', '/assets/vtubers/Elia_V-Dere_Portrait.png', 2, 1),
        ('Airi Viridis', 'Airi Viridis is an independent female English-speaking Virtual YouTuber with a focus on ASMR scenarios, table-top roleplaying/RPGs and general gameplay content. Together with Elia Stellaria, kirispica and Mozumi Pichi, she is part of the group V-Dere.' , '2023-04-12', 'Viridevils', '🩰🦇', 'Hitsu', '/assets/vtubers/Airi_V-Dere_Portrait.png', 2, 1),
        ('Mozumi Pichi', 'Mozumi Pichi (formerly Gezu Gezu) is an independent female English-speaking Virtual YouTuber. Together with Airi Viridis, Elia Stellaria, and kirispica, she is part of the group V-Dere.' , '2023-09-29', 'Mozzumites', '🍹', 'Ayaoshiro', '/assets/vtubers/Mozumi_V-Dere_Portrait.png', 2, 1),
        ('Kirispica', 'kirispica is an independent female English-speaking Virtual YouTuber and VSinger. Together with Airi Viridis, Elia Stellaria, and Mozumi Pichi, she is part of the group V-Dere.' , '2021-09-19', 'Wispicals', '💭💗', 'Azit', '/assets/vtubers/Spica_V-Dere_Portrait.png', 2, 1);

INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao)
VALUES  ('Calliope Mori', 'The Grim Reaper''s first apprentice. Due to modern medical care causing a decline in the reaping business, Calliope decided to become a VTuber to harvest souls instead. It seems that the ascended souls of the people who are vaporized by the wholesome interactions between VTubers go to her as well. That being said, despite the image her hardcore vocals and manner of speech gives off, she''s actually a gentle-hearted girl who cares greatly for her friends.', '2020-09-12', 'Dead Beats', '💀', 'Yukisame', '/assets/vtubers/Mori-Calliope.png', 3, 2),
        ('Takanashi Kiara', 'An idol whose dream is to become the owner of a fast food chain. Kiara is a phoenix, not a chicken or turkey (Very important). She burns brightly, working herself to the bone since she''ll just be reborn from her ashes anyway.', '2020-09-12', 'KFP', '🐔', 'huke', '/assets/vtubers/Takanashi-Kiara.png', 3, 2),
        ('Ninomae Ina''nis', 'Despite her looks, Ina''nis is actually a priestess of the Ancient Ones. One day, she picked up a strange book and then started to gain the power of controlling tentacles. To her, tentacles are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them dressed up and stay pretty. After gaining power, she started hearing Ancient Whispers and Revelations. Hence, she began her VTuber activities to deliver random sanity checks on humanity, as an ordinary girl.', '2020-09-13', 'Tentacult', '🐙', 'Kuroboshi Kouhaku', '/assets/vtubers/Ninomae-Inanis.png', 3, 2),
        ('Gawr Gura', 'A descendant of the Lost City of Atlantis, who swam to Earth while saying, "It''s so boring down there LOLOLOL!" Gura bought her clothes (and her shark hat) in the human world and she really loves them. In her spare time, she enjoys talking to marine life.', '2020-09-13', 'Chumbuds', '🔱', 'Amashiro Natsuki', '/assets/vtubers/Gawr-Gura.png', 3, 2),
        ('Watson Amelia', 'Amelia heard strange rumors online surrounding hololive: talking foxes, magical squirrels, superhuman dogs, and more. Soon after beginning her investigation on hololive, and just out of interest, she decided to become an idol herself! She loves to pass her time training her reflexes with FPS games, and challenging herself with puzzle games. "It''s elementary, right?"', '2020-09-13', 'Teamates', '🔎', 'nabi', '/assets/vtubers/Watson-Amelia.png', 3, 2);