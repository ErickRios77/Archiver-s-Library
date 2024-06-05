var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT * FROM agencia;`;

    return database.executar(instrucaoSql);
}

module.exports = { listar };