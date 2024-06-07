var database = require("../database/config");

function usuariosCadastrados() {
    var instrucaoSql = `SELECT COUNT(idUsuario) qtd FROM usuario;`;

    return database.executar(instrucaoSql);
}

function usuariosCadastradosHoje(){
    var instrucaoSql = `SELECT COUNT(idUsuario) qtd FROM usuario WHERE DATE(dtCadastro) LIKE DATE(NOW());`;

    return database.executar(instrucaoSql);
}

function usuariosComOshi(){
    var instrucaoSql = `SELECT COUNT(oshi) qtd FROM usuario;`;

    return database.executar(instrucaoSql);
}

function topVtubers(){
    var instrucaoSql = `SELECT nomeVtuber, count(oshi) fans FROM vtuber JOIN usuario WHERE oshi = idVtuber GROUP BY nomeVtuber ORDER BY fans DESC LIMIT 3;`;

    return database.executar(instrucaoSql);
}


module.exports = { usuariosCadastrados, usuariosCadastradosHoje, usuariosComOshi, topVtubers };