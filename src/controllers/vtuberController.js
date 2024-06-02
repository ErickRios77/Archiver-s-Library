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
    var modelVtuber = req.body.modelVtuber
    var ilustrador = req.body.ilustrador
    var fkAgencia = req.body.fkAgencia
    var fkGeracao = req.body.fkGeracao
    
    buscarPorId(id).then((resultado) => {
        if (resultado.length > 0) {
            res
                .status(401)
                .json({ mensagem: `o Vtuber com o id ${id} já existe` });
        } else {
            vtuberModel.cadastrar(nome, desc, dtDebut, fanName, oshiMark, ilustrador, modelVtuber, fkAgencia, fkGeracao).then((resultado) => {
                res.status(201).json(resultado);
            });
        }
    });
}

function buscarPorId(req, res){
    var idVtuber = req.params.idVtuber
    vtuberModel.buscarPorId(idVtuber).then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    cadastrar,
    listar,
    buscarPorId
};
