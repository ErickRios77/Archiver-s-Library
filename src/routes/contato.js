var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController");

router.post("/cadastrar", function (req, res) {
    contatoController.cadastrar(req, res);
})

router.get("/listar", function (req, res){
    contatoController.listar(req, res);
})

module.exports = router;