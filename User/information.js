const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const userID = "https://jsonplaceholder.typicode.com/users/" + id;

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
    Name: ${array.name}
    Username: ${array.username}
    Website: ${array.website}
    City: ${array.address.city}
    Phone: ${array.phone}
    `;
    container.appendChild(tag);
  });
