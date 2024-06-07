var database = require("../database/config");

function listar() {
    var instrucaoSql = `select agencia.idAgencia, agencia.nomeAgencia, IFNULL(filial.nomeAgencia, "Não é filial") AS nomeFilial, IFNULL(filial.logoAgencia, agencia.logoAgencia) AS logoAgencia from agencia as agencia left join agencia as filial on agencia.filialAgencia = filial.idAgencia;`;

    return database.executar(instrucaoSql);
}

function cadastrar(nomeAgencia, logoAgencia, filialAgencia) {
    var instrucaoSql = `INSERT INTO geracao (nomeAgencia, logoAgencia, filialAgencia) VALUES ('${nomeAgencia}', '${logoAgencia}', NULLIF('${filialAgencia}',''));`;

    return database.executar(instrucaoSql)
}

module.exports = { listar, cadastrar };