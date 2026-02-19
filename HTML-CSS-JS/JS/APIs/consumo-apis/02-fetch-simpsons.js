function getData(id){
    const url = `https://thesimpsonsapi.com/api/characters/${id}`
    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) =>{
            console.log(data.name)
        })
        .catch((e) =>{
            console.log(`Ha ocurrido un error: ${e}`)
        })
}

getData(1)
getData(5)