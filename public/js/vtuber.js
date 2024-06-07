function infoVtuber(idVtuber) {
    var idVtuberVar = idVtuber
    fetch(`/vtuber/buscarId/${idVtuberVar}`, {
        method: "get",
    }).then(function (resposta) {
        resposta.json().then((vtubers) => {
            if (vtubers.length>0) {
                vtubers.forEach((vtuber) => {
                    document.title += ' ' + vtuber.nomeVtuber;
                    imgVtuber.src = `..${vtuber.modelVtuber}`;
                    nome.innerHTML += `${vtuber.nomeVtuber}<a href="./agencia.html?id=${vtuber.idAgencia}"><img src="..${vtuber.logoAgencia}" class="agencia"></a>`;
                    apelido.innerHTML += vtuber.apelido;
                    desc.innerHTML += vtuber.descVtuber;
                    debut.innerHTML += vtuber.dtDebutVtuber;
                    geracao.innerHTML += vtuber.nomeGeracao
                    fan.innerHTML += vtuber.fanName;
                    mark.innerHTML += vtuber.oshiMark;
                    ilust.innerHTML += vtuber.ilustrador;
                });
            } else {
                document.title = `Archiver's Library - Página não encontrada`;
                alert("Esse vtuber não está cadastrado!");
                location = './';
            }
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}