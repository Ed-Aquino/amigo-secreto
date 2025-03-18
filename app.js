// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    actualizarListaAmigos();
    let amigo = document.getElementById('amigo').value;
    if (amigo != '') {
        amigos.push(amigo);
        console.log(amigos);
        let valorCaja = document.getElementById('amigo');
        valorCaja.value = '';
        actualizarListaAmigos();
    } else {
        alert("Por favor inserte un nombre");
    }
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (const elemento of amigos) {
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = `${elemento}`;
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    let tamanoListaAmigos = parseInt(amigos.length);
    let indiceAleatorio = Math.floor(Math.random()*tamanoListaAmigos);
    if (tamanoListaAmigos === 0) {
        alert("Por favor ingresa el nombre de un amigo");
    } else {
        let elegido = amigos[indiceAleatorio];
        let amigoSorteado = document.getElementById("resultado");
        amigoSorteado.innerHTML = elegido;

    }

}