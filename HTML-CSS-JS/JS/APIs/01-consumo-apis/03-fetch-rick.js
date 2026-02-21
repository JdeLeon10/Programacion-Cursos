function getCharacterInfo(id){

    const url = `https://rickandmortyapi.com/api/character/${id}`;
    
    fetch(url)
        .then((response) =>{
            if (!response.ok) {
                throw new Error("Error HTTP: " + response.status);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.name);
            console.log(data.species);
            console.log(data.location.name);
        })
        .catch(error => console.log(error))
}

getCharacterInfo(1);

// Provoca el error 404, ya que no existe el personaje con ID 9999
getCharacterInfo(9999);