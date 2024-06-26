var usuarioModel = require("../models/usuarioModel");

function listar(req, res) {
    usuarioModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function autenticar(req, res) {
    var emailNome = req.body.emailNomeServer;
    var senha = req.body.senhaServer;

    if (emailNome == undefined) {
        res.status(400).send("Seu email ou nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(emailNome, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].idUsuario,
                            email: resultadoAutenticar[0].emailUsuario,
                            nome: resultadoAutenticar[0].nomeUsuario
                        });

                        usuarioModel.registrarLogin(emailNome)

                    } else {
                        res.status(403).send("Email ou nome de usuário e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var genero = req.body.generoServer;
    var dtNasc = req.body.dtNascServer;
    var nacionalidade = req.body.nacionalidadeServer;
    var oshi = req.body.oshiServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.verificarCadastro(nome, email).then(
            function (resultadoVerificar){
                console.log(`\nResultados encontrados: ${resultadoVerificar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoVerificar)}`);

                if(!resultadoVerificar.length){
                    usuarioModel.cadastrar(nome, email, senha, genero, dtNasc, nacionalidade, oshi)
                        .then(
                            function (resultado) {
                                res.json(resultado);
                            }
                        ).catch(
                            function (erro) {
                                console.log(erro);
                                console.log(
                                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                                    erro.sqlMessage
                                );
                            }
                        );
                }else{
                    res.status(403).json({erro: 'Email ou Nome de Usuário já cadastrados'});
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao verificar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    listar,
    autenticar,
    cadastrar
}