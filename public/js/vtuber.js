function infoVtuber(idVtuber) {
    var idVtuberVar = idVtuber
    fetch(`/vtuber/buscarId/${idVtuberVar}`, {
        method: "get",
    }).then(function (resposta) {
        resposta.json().then((vtubers) => {
            if (vtubers.length>0) {
                vtubers.forEach((vtuber) => {
                    document.title += ' ' + vtuber.nomeVtuber;

                    nome.innerHTML = vtuber.nomeVtuber;
                    desc.innerHTML = vtuber.descVtuber;
                    debut.innerHTML = vtuber.dtDebutVtuber;
                    fan.innerHTML = vtuber.fanName;
                    mark.innerHTML = vtuber.oshiMark;
                    ilust.innerHTML = vtuber.ilustrador;
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