function login() {
    var emailNomeVar = emailNome.value.trim()
    var senhaVar = senha.value.trim()

    if (emailNomeVar == "" || senhaVar == "") {
        alert("Preencha todos os campos para realizar o login")
        return false
    }

    fetch("/usuario/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailNomeServer: emailNomeVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            resposta.json().then(json => {
                sessionStorage.NOME_USUARIO = json.nome
                sessionStorage.EMAIL_USUARIO = json.email

                alert("Login realizado com sucesso!")
                setTimeout(function () {
                    window.location = "../archives/index.html";
                }, 1000);
            });
        } else {
            alert("Email/Nome de usuário ou senha incorretos!")
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}