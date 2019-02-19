fetch("https://jsonplaceholder.typicode.com/users")
  .then(value => {
    return value.json();
  })
  .then(array => {
    const container = document.querySelector(".container");
    const row = document.createElement("DIV");
    row.className = "row";
    container.appendChild(row);

    array.map(myObj => {
      const user = document.createElement("DIV");
      user.className = "card";
      const name = document.createElement("A");
      const id = "description.html?id=";
      name.setAttribute("href", id + myObj.id);
      name.innerText = myObj.name;
      user.appendChild(name);
      row.appendChild(user);
    });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(data => {
        return data.json();
      })
      .then(photos => {
        const limite = photos.slice(0, 10);
        const parentElemento = document.querySelector(".container");
        const children = parentElemento.firstElementChild;
        const childrenRow = children.children;

        for (let i = 0; i < 10; i++) {
          const containerImagen = document.createElement("IMG");
          containerImagen.setAttribute("src", limite[i].thumbnailUrl);
          const nodo = childrenRow[i];
          nodo.appendChild(containerImagen);
        }
      });
  });
