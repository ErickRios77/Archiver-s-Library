function listarVtubers(){
    fetch("/vtuber/listar",{
        method: "GET",
    }).then(function(resposta){
        resposta.json().then((vtubers)=>{
            vtubers.forEach((vtuber) => {
                containerCards.innerHTML+=`
                    <div style="border: 3px solid #000000; border-radius:15px; padding:5px; display: flex; flex-direction: column; position:relative; padding-bottom:10px">
                        <img src="..${vtuber.modelVtuber}" width="100%" height="200px" style="border-radius:5px">
                        <h3 id="${vtuber.idVtuber}" style="overflow-wrap: break-word; margin-bottom:40px">
                            ${vtuber.nomeVtuber}
                            <img src="../${vtuber.logoAgencia}" style="height: 2rem; position: relative; bottom: -7px;">
                        </h3>
                        <button onclick="paginaVtuber(${vtuber.idVtuber})" style="position: absolute; bottom: 10px; align-self:center;">Saiba Mais</button>
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