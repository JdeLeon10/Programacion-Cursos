console.log("");

const API_URL = `https://rickandmortyapi.com/api/character`;
const myRequest = fetch(API_URL);

console.log("Data de todos los personajes");
myRequest
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const charactersElement = document.createElement("div");
    charactersElement.innerHTML = `
      <h2>Peticion con fetch</h2>
      <h2>Personajes de Rick and Morty</h2>
      <ul>
        ${data.results
          .map((character: { name: string }) => `<li>${character.name}</li>`)
          .join("")}
      </ul>
    `;

    document.body.appendChild(charactersElement);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Data de personaje segun ID");
const myRequest2 = fetch(`${API_URL}/1`);

myRequest2
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const characterElement = document.createElement("div");
    characterElement.innerHTML = `
      <h2>Peticion con fetch</h2>
      <h2>Personaje con ID 1</h2>
      <p>Nombre: ${data.name}</p>
      <p>Especie: ${data.species}</p>
      <p>Género: ${data.gender}</p>
      <img src="${data.image}" alt="${data.name}" />
    `;

    document.body.appendChild(characterElement);
  })
  .catch((error) => {
    console.error(error);
  });
