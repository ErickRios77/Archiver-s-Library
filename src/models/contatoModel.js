var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT * FROM contato;`;

    return database.executar(instrucaoSql);
}


function cadastrar(email, assunto, msg) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email, assunto, msg);

    var instrucaoSql = `
        INSERT INTO contato (emailContato, assuntoContato, msgContato, dtContato) VALUES ('${email}', '${assunto}', '${msg}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
}