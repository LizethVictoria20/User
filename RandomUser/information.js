let usuarioString = localStorage.getItem("usuario");
let objeto = JSON.parse(usuarioString);

let container = document.querySelector(".container");
let name = document.createElement("H2");
name.innerText = objeto.name.first;
container.appendChild(name);

let email = document.createElement("P");
email.innerText = objeto.email;
container.appendChild(email);
