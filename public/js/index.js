function contarCaracteres(){
    let caracteres = msg.value.length;
    charCount.innerHTML = `${caracteres}/1000`;
}

function enviarMsg(){
    var emailVar = email.value;
    var assuntoVar = assunto.value;
    var msgVar = msg.value;

    if(emailVar==""||assuntoVar==""||msgVar==""){
        alert("Preencha todos os campos para entrar em contato!")
        return false;
    }
    if (!(emailVar.includes("@")) || !(emailVar.includes(".com"))) {
        alert('Email deve conter "@" e ".com"!')
        return false
    }

    fetch("/contato/cadastrar",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: emailVar,
            assuntoServer: assuntoVar,
            msgServer: msgVar
        }),
    }).then(function (resposta){
        console.log("resposta: ", resposta);

        if(resposta.ok){
            alert("Mensagem enviada com sucesso!")
        } else {
            resposta.json().then((message) => {
                alert(message.erro)
            })
            throw "Houve um erro ao tentar enviar a mensagem!";
        }
    }).catch(function (erro){
        console.log(`#ERRO: ${erro}`);
    });

    limparForm();

    return false;
}

function limparForm(){
    email.value = "";
    assunto.value = "";
    msg.value = "";
    contarCaracteres();
}