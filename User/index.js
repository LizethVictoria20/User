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
  });
