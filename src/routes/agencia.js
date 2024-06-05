var express = require("express");
var router = express.Router();

var agenciaController = require("../controllers/agenciaController");


router.get("/listar", function (req, res) {
    agenciaController.listar(req, res);
});

module.exports = router;