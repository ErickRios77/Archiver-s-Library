function usuariosCadastrados() {
    fetch("/dashboard/usuariosCadastrados", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((registrados) => {
            qtdRegistrados.innerHTML = registrados[0].qtd;
        });
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function usuariosCadastradosHoje() {
    fetch("/dashboard/usuariosCadastradosHoje", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((registradosHoje) => {
            qtdRegistradosHoje.innerHTML = registradosHoje[0].qtd;
        });
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function usuariosComOshi() {
    fetch("/dashboard/usuariosComOshi", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((comOshi) => {
            qtdComOshi.innerHTML = comOshi[0].qtd;
        });
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function obterDadosGrafico() {
    fetch("/dashboard/topVtubers",).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                plotarGrafico(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    }).catch(function (error) {
        console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'fans',
            data: [],
            borderWidth: 1
        }]
    };

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        labels.push(registro.nomeVtuber);
        dados.datasets[0].data.push(registro.fans);
    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        options:{
            plugins: {
                title: {
                    display: true,
                    text: 'Top 3 Vtubers com mais fãs cadastrados',
                    font: {
                        size: 20,
                        weight: 'bold'
                    }
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById("myChart"),
        config
    );
}

function popularIndex() {
    usuariosCadastrados();
    usuariosCadastradosHoje();
    usuariosComOshi();
    obterDadosGrafico();
}

function listarAgencias() {
    fetch("/agencias/listar", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((agencias) => {
            agencias.forEach((agencia) => {
                tabela.innerHTML += `
                    <tr>
                        <td>${agencia.nomeAgencia}</td>    
                        <td>
                            <img src="..${agencia.logoAgencia}" height="20px">    
                        </td>    
                        <td>${agencia.nomeFilial}</td>    
                    </tr>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function listarGeracoes(){
    fetch("/geracao/listar", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((geracoes) => {
            geracoes.forEach((geracao) => {
                tabela.innerHTML += `
                    <tr>
                        <td>${geracao.nomeGeracao}</td>
                        <td>${geracao.nomeAgencia}</td>    
                    </tr>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function listarVtubers(){
    fetch("/vtuber/listar", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((vtubers) => {
            vtubers.forEach((vtuber) => {
                tabela.innerHTML += `
                    <tr>
                        <td>${vtuber.nomeVtuber}</td>
                        <td>${vtuber.apelido}</td>
                        <td>${vtuber.descVtuber}</td>
                        <td>${vtuber.dtDebutVtuber}</td>
                        <td>${vtuber.fanName}</td>   
                        <td>${vtuber.oshiMark}</td>
                        <td>${vtuber.ilustrador}</td>   
                        <td>${vtuber.nomeAgencia}</td>
                        <td>${vtuber.nomeGeracao}</td>      
                    </tr>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function listarUsuarios(){
    fetch("/usuario/listar", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((usuarios) => {
            usuarios.forEach((usuario) => {
                tabela.innerHTML += `
                    <tr>
                        <td>${usuario.nomeUsuario}</td>
                        <td>${usuario.emailUsuario}</td>
                        <td>${usuario.generoUsuario}</td>
                        <td>${usuario.dtNasc}</td>   
                        <td>${usuario.nacionalidade}</td>
                        <td>${usuario.dtCadastro}</td>   
                        <td>${usuario.oshi}</td>   
                    </tr>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

function listarContatos() {
    fetch("/contato/listar", {
        method: "GET",
    }).then(function (resposta) {
        resposta.json().then((contatos) => {
            contatos.forEach((contato) => {
                tabela.innerHTML += `
                    <tr>
                        <td>${contato.emailContato}</td>
                        <td>${contato.assuntoContato}</td>
                        <td>${contato.msgContato}</td>
                        <td>${contato.dtContato}</td>
                    </tr>
                `
            });
        })
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}