var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT * FROM vtuber JOIN agencia ON fkAgencia = idAgencia;`;

    return database.executar(instrucaoSql);
}

function cadastrar() {
    var instrucaoSql = `INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao) VALUES ('${nome}','${desc}','${dtDebut}','${fanName}','${oshiMark}', '${ilustrador}', '${modelVtuber}', NULLIF('${fkAgencia}',''), NULLIF('${fkGeracao}',''))`;

    return database.executar(instrucaoSql);
}

function buscarPorId(idVtuber) {
    var instrucaoSql = `SELECT nomeVtuber, descVtuber, DATE_FORMAT(dtDebutVtuber,'%d/%m/%Y') dtDebutVtuber, fanName, oshiMark, ilustrador FROM vtuber WHERE idVtuber = ${idVtuber}`;

    return database.executar(instrucaoSql);
}

module.exports = { cadastrar, listar, buscarPorId };