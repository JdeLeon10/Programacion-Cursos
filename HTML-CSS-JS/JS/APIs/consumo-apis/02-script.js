// Cambiando estilos desde JS
document.body.style.backgroundColor = "#ccc";
const asyncContainer = document.getElementById("async-container")
const fetchContainer = document.getElementById("fetch-container")

// Llamada a la api utilizando asyc
async function obtenerPersonaje(id){
    const url = `https://thesimpsonsapi.com/api/characters/${id}`
    
    try{
        const response = await fetch(url);
        
        const data = await response.json();
    
        const nombrePersonaje = data.name;
        const edadPersonaje = data.age;

        asyncContainer.innerHTML = `
            <h3> Nombre: </h3>
            <p> ${nombrePersonaje} </p>
            <h3> Edad: </h3>
            <p> ${edadPersonaje} </p>
        `;

    } catch (error){
        console.log("Error:", error);
    }
}

obtenerPersonaje(1)

// Llamada a la api utilizando fetch
function getData(id){
    const url = `https://thesimpsonsapi.com/api/characters/${id}`
    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
                    const nombrePersonaje = data.name;
        const edadPersonaje = data.age;

        fetchContainer.innerHTML = `
            <h3> Nombre: </h3>
            <p> ${nombrePersonaje} </p>
            <h3> Edad: </h3>
            <p> ${edadPersonaje} </p>
        `;
        })
        .catch((e) =>{
            console.log(`Ha ocurrido un error: ${e}`)
        })
}

getData(5)