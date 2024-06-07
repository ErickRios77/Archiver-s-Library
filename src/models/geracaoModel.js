var database = require("../database/config");

function listar() {
    var instrucaoSql = 'SELECT * FROM geracao JOIN agencia ON fkAgencia = idAgencia;';

    return database.executar(instrucaoSql)
}

function cadastrar(nomeGeracao, fkAgencia) {
    var instrucaoSql = `INSERT INTO geracao (nomeGeracao, fkAgencia) VALUES (${nomeGeracao}, ${fkAgencia});`;

    return database.executar(instrucaoSql)
}

module.exports = { listar, cadastrar };