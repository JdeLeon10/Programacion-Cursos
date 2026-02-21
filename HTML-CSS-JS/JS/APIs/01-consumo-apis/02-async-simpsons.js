async function obtenerPersonaje(id){
    const url = `https://thesimpsonsapi.com/api/characters/${id}`

    try{
        const response = await fetch(url);

        const data = await response.json();

        console.log(data.name)
        console.log(data.age)
        console.log(data.occupation)
    } catch (error){
        console.log("Error:", error);
    }
}

obtenerPersonaje(1)
obtenerPersonaje(3)