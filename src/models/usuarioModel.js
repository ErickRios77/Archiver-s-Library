var database = require("../database/config");

function autenticar(emailNome, senha){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", emailNome, senha)
    var instrucaoSql = `
        SELECT idUsuario, nomeUsuario, emailUsuario, senhaUsuario, generoUsuario, dtNasc, nacionalidade, dtCadastro, oshi FROM usuario WHERE senhaUsuario = '${senha}' AND (emailUsuario = '${emailNome}' OR nomeUsuario = '${emailNome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, genero, dtNasc, nacionalidade, oshi){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, genero, dtNasc, nacionalidade, oshi);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nomeUsuario, emailUsuario, senhaUsuario, generoUsuario, dtNasc, nacionalidade, dtCadastro, oshi) VALUES ('${nome}', '${email}', '${senha}', NULLIF('${genero}',''), NULLIF('${dtNasc}',''), NULLIF('${nacionalidade}',''), now(), NULLIF('${oshi}',''));
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};