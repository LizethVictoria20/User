const usuarioString = localStorage.getItem("usuario");
const objeto = JSON.parse(usuarioString);
console.log(objeto);
const container = document.querySelector(".container");
const information = document.createElement("p");
information.className = "information";
const picture = document.createElement("IMG");
picture.setAttribute("src", objeto.picture.medium);
picture.className = "imgUser";
container.appendChild(picture);

information.innerHTML = `
  <strong>Name: </strong>${objeto.name.first} ${objeto.name.last}<br />
  <strong>Phone: </strong>${objeto.phone}<br />
   <strong>City: </strong>${objeto.location.city}<br />
   <strong>Email: </strong>${objeto.email}<br />
    <strong>Age: </strong>${objeto.dob.age}<br />
    <strong>Gender: </strong>${objeto.gender}<br />
`;

container.appendChild(information);
