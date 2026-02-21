async function getCharacterInfo(id){

    const url = `https://rickandmortyapi.com/api/character/${id}`;

    try{
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        
        const data = await response.json();

        console.log("Nombre:", data.name);
        console.log("Especie:", data.species);
        console.log("Ubicación:", data.location.name);

    } catch (error) {
        console.log(`Error encontrado: ${error}`)
    }
}

getCharacterInfo(1);