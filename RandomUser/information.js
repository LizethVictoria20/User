const url = new URLSearchParams(window.location.search);
const id = url.get("id");

const informationID = "https://randomuser.me/api/?results=30" + url;

fetch(informationID)
  .then(value => {
    return value.json();
  })
  .then(value => {
    return value.results;
  })
  .then(array => {
    array.map(obj => {
      console.log(obj);
      const container = document.querySelector(".container");
      const phone = document.createElement("p");
      phone.innerText = obj.cell;
      container.appendChild(phone);

      const name = document.createElement("H1");
      name.innerText = obj.name.first;
      container.appendChild(name);
    });
  });
