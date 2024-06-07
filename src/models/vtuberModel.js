var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT * FROM vtuber JOIN apelido ON fkVtuber = idVtuber JOIN agencia ON fkAgencia = idAgencia JOIN geracao ON fkGeracao = idGeracao;`;

    return database.executar(instrucaoSql);
}

function cadastrar() {
    var instrucaoSql = `INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao) VALUES ('${nome}','${desc}','${dtDebut}','${fanName}','${oshiMark}', '${ilustrador}', '${modelVtuber}', NULLIF('${fkAgencia}',''), NULLIF('${fkGeracao}',''))`;

    return database.executar(instrucaoSql);
}

function buscarPorId(idVtuber) {
    var instrucaoSql = `SELECT nomeVtuber, apelido, descVtuber, DATE_FORMAT(dtDebutVtuber,'%d/%m/%Y') dtDebutVtuber, fanName, oshiMark, ilustrador, modelVtuber, idAgencia, nomeAgencia, logoAgencia, nomeGeracao FROM vtuber JOIN apelido ON fkVtuber = idVtuber JOIN agencia ON fkAgencia = idAgencia JOIN geracao on fkGeracao = idGeracao WHERE idVtuber = ${idVtuber}`;

    return database.executar(instrucaoSql);
}

function buscarPorAgencia(idAgencia){
    var instrucaoSql = `SELECT * FROM vtuber JOIN agencia ON fkAgencia = idAgencia WHERE idAgencia = ${idAgencia}`;

    return database.executar(instrucaoSql);
}

module.exports = { cadastrar, listar, buscarPorId, buscarPorAgencia };