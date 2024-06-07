function validarSessao() {
    var nome = sessionStorage.NOME_USUARIO;

    if(nome == null){
        window.location = "../login.html";
    }
}

function validarADM(){
    var nome = sessionStorage.NOME_USUARIO;

    if (nome != 'ADM') {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}