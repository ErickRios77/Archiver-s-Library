function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome.value;
    var emailVar = email.value;
    var senhaVar = senha.value;
    var confirmacaoSenhaVar = senhaConf.value;
    var generoVar = genero.value;
    var dtNascVar = dtNasc.value;
    var nacionalidadeVar = nacionalidade.value;
    var oshiVar = oshi.value;

    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "" 
    ) {
        alert('Preencha todos os campos marcados com "*"!')
        return false
    }
    if (!(emailVar.includes("@")) || !(emailVar.includes(".com"))){
        alert('Email deve conter "@" e ".com"!')
        return false
    }
    if (confirmacaoSenhaVar != senhaVar){
        alert('Campos de senha e confirmação de senha estão divergentes!')
        return false
    }

    // Enviando o valor da nova input
    fetch("/usuario/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                generoServer: generoVar,
                dtNascServer: dtNascVar,
                nacionalidadeServer: nacionalidadeVar,
                oshiServer: oshiVar
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...")

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");

                } else {
                    resposta.json().then((message) => {
                        alert(message.erro)
                    })
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });

    return false;
}

function listarVtubers() {
    fetch("/vtuber/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((vtubers) => {
                vtubers.forEach((vtuber) => {
                    oshi.innerHTML += `<option value='${vtuber.idVtuber}'>${vtuber.nomeVtuber}</option>`;
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function listarPaises(){
    
    fetch("https://restcountries.com/v3.1/all?fields=cca3,name", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((paises) => {
                paises = paises.sort((a, b)=>{
                    if(a.name.common < b.name.common){
                        return -1;
                    }
                    if (a.name.common > b.name.common) {
                        return 1;
                    }
                    return 0;
                });
                for(let i = 0; i<paises.length;i++){
                    nacionalidade.innerHTML += `<option value='${paises[i].cca3}'>${paises[i].name.common}</option>`
                }
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}