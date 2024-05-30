var database = require("../database/config");

function listar(){
    var instrucaoSql = `SELECT * FROM vtuber`;

    return database.executar(instrucaoSql);
}

function cadastrar() {
    var instrucaoSql = `INSERT INTO vtuber (nomeVtuber, descVtuber, dtDebutVtuber, fanName, oshiMark, ilustrador, fkAgencia, fkGeracao) VALUES ('${nome}','${desc}','${dtDebut}','${fanName}','${oshiMark}', '${ilustrador}', NULLIF('${fkAgencia}',''), NULLIF('${fkGeracao}',''))`;

    return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
    var instrucaoSql = `SELECT * FROM vtuber WHERE nome = '${nome}'`;

    return database.executar(instrucaoSql);
}

module.exports = {cadastrar, listar, buscarPorNome};