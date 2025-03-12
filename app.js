// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Empezamos creando el array para los amigos que se van a capturar
let amigos = [];


function sortearAmigo() {
if (amigos.length < 2) {
    alert("No seria un misterio, por favor ingrese mas de un amigo");
}

}


// Esto es lo que ocurre cuando se presiona el boton de agregar amigo

function agregarAmigo() {
    let textoIngresado = document.getElementById("amigo").value;
    if (textoIngresado != "") {
        amigos.push(textoIngresado);    
        // Aqui se imprime la consola para pruebas
        console.log(amigos);
        return;
    }
    alert("Por favor ingrese un nombre en el campo editable");
}


console.log(amigos);