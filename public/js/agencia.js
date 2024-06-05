function listarAgencias() {
    fetch("/agencias/listar", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((agencias) => {
            agencias.forEach((agencia) => {
                containerCards.innerHTML += `
                    <div class="cards">
                        <img src="..${agencia.logoAgencia}" class="cardImg homeAgencia">
                        <h3 id="${agencia.idAgencia}">
                            ${agencia.nomeAgencia}
                        </h3>
                        <button onclick="paginaAgencia(${agencia.idAgencia})">Saiba Mais</button>
                    </div>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function paginaAgencia(idAgencia) {
    window.location = `./agencia.html?id=${idAgencia}`
}