let amigos = [];
let listaAmigos= [];

function limpiarCaja() {
    document.getElementById('amigo').value ="";
    return;
}
//funcion agregar amigos
function agregarAmigo(){
    let participantes = document.getElementById("amigo").value;
    if(participantes !== ""){
        amigos.push(participantes);
        console.log(amigos);
        limpiarCaja();
        mostrarListaAmigos();
    }else{
        alert("Porfavor, inserte un nombre")
    }
}
function mostrarListaAmigos() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigos){
        let porCadaNombre = document.createElement("li");
        porCadaNombre.textContent= amigos;
        lista.appendChild(porCadaNombre);
    })
}
function asignarTextoAlElemento(elementos,mensaje){
    let elementoHtml = document.querySelector(elementos);
    elementoHtml.innerHTML = mensaje;
    return;
}
function sortearAmigo() {
    let amigoAleatorio= amigos[Math.floor(Math.random()*amigos.length)];
    console.log(amigoAleatorio);
    if(listaAmigos.length===amigos.length){
        asignarTextoAlElemento('h2','Sorteo terminado');
        asignarTextoAlElemento('ul','Espero que sorprendas a tu amigo secreto');
        return;
    }else{
        if(listaAmigos.includes(amigoAleatorio)){
            return sortearAmigo();
        }else{
            listaAmigos.push(amigoAleatorio);
            console.log(listaAmigos);
            asignarTextoAlElemento('ul',`Te toca regarle a: ${amigoAleatorio}`);
        }
    }
}
