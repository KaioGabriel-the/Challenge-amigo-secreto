//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let arrayAmigos = [];

function sortearAmigo() {
    if (arrayAmigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * arrayAmigos.length);
    let amigoSorteado = arrayAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;
}


function adicionarNovoAmigo(id,lista){
    let element = document.getElementById(id);
    element.innerHTML = ""

    lista.forEach((nomeAmigo)=> {
        let novoAmigo = document.createElement("li");
        novoAmigo.textContent = nomeAmigo;
        element.append(novoAmigo);
    });
}

function limparCampo(){
    let campo = document.querySelector("input");
    campo.value = "";
}

function adicionarAmigo(){
    let amigo = document.getElementById("amigo");
    let nomeAmigo = amigo.value.trim();

    if(nomeAmigo === ""){
        alert("Por favor, insira um nome.");
        return;
    }

    limparCampo();
    arrayAmigos.push(nomeAmigo);
    console.log(arrayAmigos);
    adicionarNovoAmigo("listaAmigos",arrayAmigos);
}