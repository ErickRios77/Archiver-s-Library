var geracaoModel = require("../models/geracaoModel");


function listar(req, res) {
    geracaoModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    listar
};
    