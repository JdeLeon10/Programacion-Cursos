// CONSUMIENDO UNA API => fetch()
// https://www.freecodecamp.org/espanol/news/consumiendo-servicios-api-desde-javascript/

/*
    API: Conjunto de reglas y protocolos que permite que dos aplicaciones se comuniquen entre si
    REST: Parte del protocolo HTTP, utiliza URLs para identificar recursos
        GET: recuperar datos
        POST: enviar datos y crear un nuevo recursos
        PUT: actualizar un recursos existente del servidor
        DELETE: eliminar un recurso existende del servidor
*/

/*
    Estructura basica de fetch (promesas clasicas)

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
*/

const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(url)
    .then((response) =>{ // Recibe el objeto response con la respuesta cruda HTTP

        // Validacion de estado
        if(!response.ok){ 
            console.log(`Error http, ${response.status}`)
        }

        return response.json(); 
    })// Convertimos la respuesta a JSON

    .then((data) => {
        // console.log(data)
        console.log("Nombre", data.name);
        console.log("ID:", data.id);
    })

    .catch(function(error) {
        console.error("Ocurrió un error:", error.message);
    });


/*
    Utilizando async / await

    Estructura basica de async / await
    async function nombreFuncion(){
        try{
            const response = await fetch(url); // Esperamos la respuesta del servidor

            // Validacion de error
            if (!response.ok) {
                throw new Error("Error HTTP: " + response.status);
            }

            // convertir a JSON
            const data = await response.json();

            // Mostrar datos
            console.log(data);

        } catch (error) {
            console.log(`Error encontrado: ${error}`)
        }
    }

*/
async function ObtenerPokemon(nombre){
    
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    
    try{
        const response = await fetch(url) // Esperamos la respuesta del servidor

        // Validacion de error
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        // convertir a JSON
        const data = await response.json();

        // Mostrar datos
        console.log("Nombre", data.name);
        console.log("ID:", data.id);
    } catch (error) {
        console.log(`Error encontrado: ${error}`)
    }
}

ObtenerPokemon("ditto")