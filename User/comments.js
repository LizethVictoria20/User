fetch("https://jsonplaceholder.typicode.com/comments")
  .then(value => {
    return value.json();
  })
  .then(value => {
    const slice = value.slice(0, 10);
    const container = document.querySelector(".container");
    const row = document.createElement("DIV");
    container.appendChild(row);
    row.className = "row";

    slice.map(myObj => {
      console.log(myObj);
      const card = document.createElement("DIV");
      card.className = "card card-comments";
      row.appendChild(card);

      const comments = document.createElement("P");
      comments.className = "comments";
      comments.innerText = myObj.body;
      card.appendChild(comments);

      const name = document.createElement("P");
      name.className = "name ";
      name.innerText = `
      Name: ${myObj.name}
      Email: ${myObj.email}
      `;
      card.appendChild(name);
    });
  });
