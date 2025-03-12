// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Empezamos creando el array para los amigos que se van a capturar
let amigos;
iniciarPagina()

function sortearAmigo() {
if (amigos.length < 2) {
    alert("No seria un misterio, por favor ingrese mas de un amigo");
} else {
    let numAmigo = Math.floor(Math.random()*amigos.length);
    selAmigo = amigos[numAmigo];
    editarEtiqueta("resultado",`Amigo seleccionado: ${selAmigo}`);
}

}

function iniciarPagina() {
    amigos = [];
    editarEtiqueta("listaAmigos", "");
}


// Esto es lo que ocurre cuando se presiona el boton de agregar amigo

function agregarAmigo() {
    let textoIngresado = document.getElementById("amigo").value;
    if (textoIngresado != "") {
        amigos.push(textoIngresado);    
        // Aqui se imprime la consola para pruebas
        console.log(amigos);
        limpiarInput("amigo")
        agregarLista(textoIngresado);
        return;
    }
    alert("Por favor ingrese un nombre en el campo editable");
}


function agregarLista(amigoSeleccionado) {
    let ul = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(amigoSeleccionado));
    ul.appendChild(li);
    return;
}

function editarEtiqueta(idHtml, texto) {
    let title = document.getElementById(idHtml);
    title.innerHTML = texto;
    return;
}

function limpiarInput(idHtml) {
    document.getElementById(idHtml).value = "";
}