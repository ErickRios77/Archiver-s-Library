var vtuberModel = require("../models/vtuberModel");


function listar(req, res) {
    vtuberModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nomeVtuber
    var desc = req.body.descVtuber
    var dtDebut = req.body.dtDebutVtuber
    var fanName = req.body.fanName
    var oshiMark = req.body.oshiMark
    var ilustrador = req.body.ilustrador
    var fkAgencia = req.body.fkAgencia
    var fkGeracao = req.body.fkGeracao
    
    vtuberModel.buscarPorNome(nome).then((resultado) => {
        if (resultado.length > 0) {
            res
                .status(401)
                .json({ mensagem: `o Vtuber com o nome ${nome} já existe` });
        } else {
            vtuberModel.cadastrar(nome, desc, dtDebut, fanName, oshiMark, ilustrador, fkAgencia, fkGeracao).then((resultado) => {
                res.status(201).json(resultado);
            });
        }
    });
}

module.exports = {
    cadastrar,
    listar
};
