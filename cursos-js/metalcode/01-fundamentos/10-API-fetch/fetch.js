fetch("https://google.com")
    .then(response =>{
        console.log(response)
    })
    .catch(error =>{
        console.log(`Ha ocurrido un error: ${error}`)
    })
    .finally(() =>{
        console.log("El programa ha terminado")
    });