var contatoModel = require("../models/contatoModel");

function cadastrar(req, res){
    var email = req.body.emailServer;
    var assunto = req.body.assuntoServer;
    var msg = req.body.msgServer;

    if(email==undefined){
        res.status(400).send("Seu email está undefined!");
    }else if (assunto == undefined) {
        res.status(400).send("Seu assunto está undefined!");
    }else if (msg == undefined) {
        res.status(400).send("Sua mensagem está undefined!");
    }else{
        contatoModel.cadastrar(email,assunto,msg).then(
            function (resultado){
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
        )
    }
}

module.exports = {
    cadastrar
}