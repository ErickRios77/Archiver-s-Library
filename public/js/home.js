function listarVtubers(){
    fetch("/vtuber/listar",{
        method: "GET",
    }).then(function(resposta){
        resposta.json().then((vtubers)=>{
            vtubers.forEach((vtuber) => {
                containerCards.innerHTML+=`
                    <div class="cards">
                        <img src="..${vtuber.modelVtuber}" class="cardImg">
                        <h3 id="${vtuber.idVtuber}">
                            ${vtuber.nomeVtuber}
                            <img src="../${vtuber.logoAgencia}" class="agencia">
                        </h3>
                        <button onclick="paginaVtuber(${vtuber.idVtuber})">Saiba Mais</button>
                    </div>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function paginaVtuber(idVtuber){
    window.location = `./vtuber.html?id=${idVtuber}`
}