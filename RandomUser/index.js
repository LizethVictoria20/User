let personajes = [];
fetch("https://randomuser.me/api/?results=30")
  .then(value => {
    return value.json();
  })
  .then(value => {
    return value.results;
  })
  .then(array => {
    const container = document.querySelector(".container");
    const row = document.createElement("DIV");
    row.className = "row";
    container.appendChild(row);
    personajes = array;

    personajes.map((myObj, index) => {
      const containerInfo = document.createElement("DIV");
      containerInfo.className = "card";

      const imagen = document.createElement("IMG");
      imagen.className = "img-users";
      imagen.setAttribute("src", myObj.picture.large);
      containerInfo.appendChild(imagen);
      row.appendChild(containerInfo);

      const URL = "information.html?id=";

      const name = document.createElement("A");
      name.setAttribute("href", URL + myObj.id.name);
      name.setAttribute("data-position", index);
      name.innerText = myObj.name.first;
      containerInfo.appendChild(name);

      name.addEventListener("click", click);
    });
  });

function click(event) {
  let target = event.target;
  let position = target.getAttribute("data-position");
  let usuario = personajes[position];

  localStorage.setItem("usuario", JSON.stringify(usuario));
}
