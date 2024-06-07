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

CREATE TABLE apelido(
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

INSERT INTO agencia(nomeAgencia, logoAgencia, filialAgencia)
VALUES  ('Independente', '/assets/Logo.svg', NULL),
        ('V-Dere', '/assets/agencias/vdere-icon.png', NULL),
        ('Hololive', '/assets/agencias/hololive-icon.ico', NULL),
        ('Hololive EN', '/assets/agencias/hololive-icon.ico', 3);

INSERT INTO geracao(nomeGeracao, fkAgencia)
VALUES  ('Gen 1', 2),
        ('Gen 0', 3),
        ('Myth', 4);

INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao)
VALUES  ('Elia Stellaria', 'Elia Stellaria é uma YouTuber virtual independente de língua inglesa. Juntamente com Mozumi Pichi, Airi Viridis e kirispica, faz parte do grupo V-Dere. Estreitamente relacionada com o culto “This banana".' , '2023-09-30', 'Starling and Stananas', '💌✨', 'Loulou_lou', '/assets/vtubers/Elia_V-Dere_Portrait.png', 2, 1),
        ('Airi Viridis', 'Airi Viridis é uma YouTuber virtual independente, de língua inglesa, que se dedica a cenários ASMR, RPGs de mesa e conteúdos de jogo em geral. Juntamente com Elia Stellaria, kirispica e Mozumi Pichi, faz parte do grupo V-Dere.' , '2023-04-12', 'Viridevils', '🩰🦇', 'Hitsu', '/assets/vtubers/Airi_V-Dere_Portrait.png', 2, 1),
        ('Mozumi Pichi', 'Mozumi Pichi (anteriormente Gezu Gezu) é uma YouTuber virtual independente de língua inglesa. Juntamente com Airi Viridis, Elia Stellaria e kirispica, faz parte do grupo V-Dere.' , '2023-09-29', 'Mozzumites', '🍹', 'Ayaoshiro', '/assets/vtubers/Mozumi_V-Dere_Portrait.png', 2, 1),
        ('Kirispica', 'kirispica é uma YouTuber Virtual e VSinger independente de língua inglesa. Juntamente com Airi Viridis, Elia Stellaria e Mozumi Pichi, faz parte do grupo V-Dere.' , '2021-09-19', 'Wispicals', '💭💗', 'Azit', '/assets/vtubers/Spica_V-Dere_Portrait.png', 2, 1);

INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao)
VALUES  ('Tokino Sora','"Ei, Sora-tomo! Como vocês estão indo? Sou eu, Tokino Sora!" a primeira ídolo virtual da hololive Production, estreando em 7 de setembro de 2017. Ela adora jogos de terror e cantar, e sempre sonhou em se apresentar na Yokohama Arena. Ela assinou um contrato de gravação com a Victor Entertainment em março de 2019. Ela é ativa em várias formas de mídia, como aparecer em Watanuki-san Chi no e apresentar o programa de rádio Sora Ao to! Ela realizou seu primeiro show solo, Dream!, em 6 de outubro de 2019, dando mais um passo em direção ao seu objetivo final.','2017-09-07','Sora-tomo','🐻','Ordan','/assets/vtubers/Tokino-Sora.png',3,2),
        ('Robocosan','"Hellobo! Roboco aqui!" Olá! Sou eu, o VTuber Roboco hololive de alta especificação! Apareci de uma terra devastada distante, tendo perdido todas as minhas memórias. Acredito que sou bastante sofisticado, mas alguns rumores dizem que seria mais correto me chamar de “quebrado”... rs. Sou uma garota gamer cuja característica marcante é uma voz de canto muito humana e emocional! Será que sou mesmo um robô? Opa, parece que meu braço se soltou...','2018-03-09','Roboser','🤖','Kuromaru9','/assets/vtubers/Roboco-san.png',3,2),
        ('AZKi','Sou a Diva Virtual AZKi! Adoro música e canto! Uma diva que renasceu no mundo virtual para criar um novo mundo. Não importa a hora, o lugar ou a posição, ela atravessa todas as barricadas com seu talento deslumbrante.','2018-11-15','Kaitakusha (Pioneers)','⚒️','kasokuSato','/assets/vtubers/AZKi.png',3,2),
        ('Sakura Miko','"Nya-hello! Sou a donzela do santuário de elite da hololive, Sakura Miko!" Costumava trabalhar arduamente no Santuário Virtual Sakura, cumprindo seus deveres de donzela do santuário, até que, seguindo as ordens dos deuses, foi levada ao Japão, onde descobriu Tokino Sora. Depois de desenvolver uma enorme admiração por ela, ela decidiu se tornar uma idol virtual de shrine maiden e continuar trabalhando duro por esse sonho!','2018-08-01','35P','🌸','Tanaka Yuuichi','/assets/vtubers/Sakura-Miko.png',3,2),
        ('Hoshimachi Suisei','“Sua estrela cadente, seu diamante bruto, o ídolo VTuber Hoshimachi Suisei!” Uma VTuber para sempre 18 que ama profundamente o canto e os ídolos. Seu sonho é um dia fazer um show ao vivo no Tokyo Budokan.','2018-03-22','Hoshiyomi','☄️','Teshina Nari','/assets/vtubers/Hoshimachi-Suisei.png',3,2);

INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao)
VALUES  ('Calliope Mori', 'A primeira aprendiz do Ceifador. Devido ao fato de a assistência médica moderna ter causado um declínio no negócio da ceifa, Calliope decidiu se tornar um VTuber para colher almas. Parece que as almas ascendidas das pessoas que são vaporizadas pelas interações saudáveis entre os VTubers também vão para ela. Dito isso, apesar da imagem que seus vocais hardcore e sua maneira de falar transmitem, ela é, na verdade, uma garota de coração gentil que se preocupa muito com seus amigos.', '2020-09-12', 'Dead Beats', '💀', 'Yukisame', '/assets/vtubers/Mori-Calliope.png', 4, 3),
        ('Takanashi Kiara', 'Uma ídolo cujo sonho é se tornar proprietário de uma rede de fast food. Kiara é uma fênix, não uma galinha ou um peru (muito importante). Ela queima intensamente, trabalhando até os ossos, já que renascerá de suas cinzas de qualquer maneira.', '2020-09-12', 'KFP', '🐔', 'huke', '/assets/vtubers/Takanashi-Kiara.png', 4, 3),
        ('Ninomae Ina''nis', 'Apesar de sua aparência, Ina''nis é, na verdade, uma sacerdotisa dos Antigos. Um dia, ela pegou um livro estranho e começou a ganhar o poder de controlar tentáculos. Para ela, os tentáculos são apenas uma parte de sua vida comum; nunca foi algo importante para ela. No entanto, sua mente feminina quer vesti-los e ficar bonita. Depois de ganhar poder, ela começou a ouvir sussurros e revelações antigas. Por isso, ela começou suas atividades de VTuber para fazer verificações aleatórias de sanidade na humanidade, como uma garota comum.', '2020-09-13', 'Tentacult', '🐙', 'Kuroboshi Kouhaku', '/assets/vtubers/Ninomae-Inanis.png', 4, 3),
        ('Gawr Gura', 'Uma descendente da Cidade Perdida de Atlântida, que nadou até a Terra enquanto dizia: “É tão chato lá embaixo, LOLOLOL!” Gura comprou suas roupas (e seu chapéu de tubarão) no mundo humano e realmente as adora. Em seu tempo livre, ela gosta de conversar com a vida marinha.', '2020-09-13', 'Chumbuds', '🔱', 'Amashiro Natsuki', '/assets/vtubers/Gawr-Gura.png', 4, 3),
        ('Watson Amelia', 'Amelia ouviu estranhos rumores on-line sobre a hololive: raposas falantes, esquilos mágicos, cães sobre-humanos e muito mais. Logo depois de começar sua investigação sobre a hololive, e apenas por interesse, ela decidiu se tornar um ídolo! Ela adora passar o tempo treinando seus reflexos com jogos FPS e se desafiando com jogos de quebra-cabeça. “É elementar, certo?”', '2020-09-13', 'Teamates', '🔎', 'nabi', '/assets/vtubers/Watson-Amelia.png', 4, 3);

INSERT INTO apelido (apelido, fkVtuber)
VALUES  ('Eli',1),
        ('Riri',2),
        ('Mozuzu',3),
        ('Spica',4),
        ('Tokino Soda',5),
        ('Roborobo',6),
        ('Azu-chan',7),
        ('Elite Miko',8),
        ('Suicopath',9),
        ('Kawaiiope',10),
        ('Kiwawa',11),
        ('Tako',12),
        ('Goomba',13),
        ('Ame',14);

        SELECT * FROM vtuber JOIN apelido ON fkVtuber = idVtuber JOIN agencia ON fkAgencia = idAgencia JOIN geracao ON fkGeracao = idGeracao;