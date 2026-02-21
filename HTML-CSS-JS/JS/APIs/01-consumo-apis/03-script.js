const characterContainer = document.getElementById('character');

async function getCharacter(id) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const data = await response.json();

        characterContainer.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Especie:</strong> ${data.species}</p>
            <p><strong>Ubicación:</strong> ${data.location.name}</p>
            <img src="${data.image}" alt="${data.name}">
        `;

    } catch (error) {
        console.log(`Error encontrado: ${error}`);
    }
}

getCharacter(1);