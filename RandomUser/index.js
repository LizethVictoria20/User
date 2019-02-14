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
    let personajes = array;

    personajes.map(myObj => {
      console.log(myObj);
      const containerInfo = document.createElement("DIV");
      containerInfo.className = "card";

      const imagen = document.createElement("IMG");
      imagen.className = "img-users";
      imagen.setAttribute("src", myObj.picture.large);
      containerInfo.appendChild(imagen);
      row.appendChild(containerInfo);

      const URL = "";

      const name = document.createElement("A");

      name.innerText = myObj.name.first;
      containerInfo.appendChild(name);
    });
  });
