var dashboardModel = require("../models/dashboardModel");

function usuariosCadastrados(req, res) {
    dashboardModel.usuariosCadastrados().then((resultado) => {
        res.status(200).json(resultado);
    });
}
function usuariosCadastradosHoje(req, res) {
    dashboardModel.usuariosCadastradosHoje().then((resultado) => {
        res.status(200).json(resultado);
    });
}
function usuariosComOshi(req, res) {
    dashboardModel.usuariosComOshi().then((resultado) => {
        res.status(200).json(resultado);
    });
}
function topVtubers(req, res) {
    dashboardModel.topVtubers().then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = { usuariosCadastrados, usuariosCadastradosHoje, usuariosComOshi, topVtubers };
