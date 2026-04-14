console.log("");

const API_URL = `https://rickandmortyapi.com/api/character`;

interface Character {
  name: string;
  species: string;
  gender: string;
  image: string;
}

interface CharactersResponse {
  results: Character[];
}

const getCharacters = async () => {
  try {
    console.log("Data de todos los personajes");

    const response = await fetch(API_URL);
    const data = (await response.json()) as CharactersResponse;

    console.log(data);

    const charactersElement = document.createElement("div");
    charactersElement.innerHTML = `
      <h2>Peticion con async y await</h2>
      <h2>Personajes de Rick and Morty</h2>
      <ul>
        ${data.results
          .map((character: Character) => `<li>${character.name}</li>`)
          .join("")}
      </ul>
    `;

    document.body.appendChild(charactersElement);
  } catch (error) {
    console.error(error);
  }
};

const getCharacterById = async (id: number) => {
  try {
    console.log("Data de personaje segun ID");

    const response = await fetch(`${API_URL}/${id}`);
    const data = (await response.json()) as Character;

    console.log(data);

    const characterElement = document.createElement("div");
    characterElement.innerHTML = `
      <h2>Peticion con async y await</h2>
      <h2>Personaje con ID ${id}</h2>
      <p>Nombre: ${data.name}</p>
      <p>Especie: ${data.species}</p>
      <p>Género: ${data.gender}</p>
      <img src="${data.image}" alt="${data.name}" />
    `;

    document.body.appendChild(characterElement);
  } catch (error) {
    console.error(error);
  }
};

getCharacters();
getCharacterById(1);
