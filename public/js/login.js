function login() {
    var emailNomeVar = emailNome.value.trim()
    var senhaVar = senha.value.trim()

    if (emailNomeVar == "" || senhaVar == "") {
        alert("Preencha todos os campos para realizar o login")
        return false
    }

    if (emailNomeVar == "ADM" && senhaVar == "123") {
        alert("Login realizado com sucesso!")

        sessionStorage.NOME_USUARIO = "ADM";

        setTimeout(function () {
            window.location = "../dashboard/index.html";
        }, 1000);

        return;
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
                sessionStorage.NOME_USUARIO = json.nome;

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