var express = require("express");
var router = express.Router();

var vtuberController = require("../controllers/vtuberController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    vtuberController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    vtuberController.listar(req, res);
});

router.get("/buscarId/:idVtuber", function (req, res) {
    vtuberController.buscarPorId(req, res);
});

module.exports = router;