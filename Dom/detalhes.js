const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const body = document.body;

const montaPagina = (dados) => {
    const body = document.body;

    const nome = document.createElement('h1');
    nome.innerHTML = dados.nome;
    body.appendChild(nome);
    
    const imagem = document.createElement('img');
    imagem.src = dados.imagem;
    body.appendChild(imagem);

    const elenco = document.createElement('h2');
    elenco.innerHTML = dados.elenco;
    body.appendChild(elenco);

    const posicao = document.createElement('h2');
    posicao.innerHTML = dados.posicao;
    body.appendChild(posicao);

    const naturalidade = document.createElement('p');
    naturalidade.innerHTML = dados.naturalidade;
    body.appendChild(naturalidade);

    const nascimento = document.createElement('p');
    nascimento.innerHTML = dados.nascimento;
    body.appendChild(nascimento)

    const detalhes = document.createElement('p');
    detalhes.innerHTML = dados.detalhes;
    body.appendChild(detalhes);

    
}

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    (r) => montaPagina(r)
);

console.log(params.get("id"));