let usuarioString = localStorage.getItem("usuario");
let objeto = JSON.parse(usuarioString);
console.log(objeto);
let container = document.querySelector(".container");
let information = document.createElement("p");
information.className = "information";
information.innerHTML = `
  <img src=${objeto.picture.medium}>
  <strong>Name: </strong><p>${objeto.name.first} ${objeto.name.last}</p>
  <strong>Phone: </strong><p>${objeto.phone}</p>
   <strong>City: </strong><p>${objeto.location.city}</p>
   <strong>Email: </strong><p>${objeto.email}</p>
    <strong>Age: </strong><p>${objeto.dob.age}</p>
    <strong>Gender: </strong><p>${objeto.gender}</p>
`;

container.appendChild(information);
