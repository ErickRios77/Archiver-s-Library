var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get("/", function (req, res) {
    dashboardController.listar(req, res);
});

router.get("/usuariosCadastrados", function(req, res){
    dashboardController.usuariosCadastrados(req,res)
});
router.get("/usuariosCadastradosHoje", function(req, res){
    dashboardController.usuariosCadastradosHoje(req,res)
});
router.get("/usuariosComOshi", function(req, res){
    dashboardController.usuariosComOshi(req,res)
});
router.get("/topVtubers", function(req, res){
    dashboardController.topVtubers(req,res)
});

module.exports = router;