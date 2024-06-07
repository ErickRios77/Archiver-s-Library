var express = require("express");
var router = express.Router();

var geracaoController = require("../controllers/geracaoController");


router.get("/listar", function (req, res) {
    geracaoController.listar(req, res);
});

module.exports = router;