const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const userID = "https://jsonplaceholder.typicode.com/todos/" + id;

fetch(userID)
  .then(value => {
    return value.json();
  })
  .then(array => {
    console.log(array);
    const container = document.querySelector(".container");
    const tag = document.createElement("H3");
    tag.className = "info";
    tag.innerText = `
    Title: ${array.title}
    Completed: ${array.completed}
    `;
    container.appendChild(tag);
  });
