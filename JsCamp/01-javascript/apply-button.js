/* Codigo no dinamico, botones con JS no funcionarian
const buttonsApply = document.querySelectorAll('.button-apply-job');

buttonsApply.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.classList.add('is-applied')
        boton.textContent = '¡Aplicado!'
        boton.disabled = true
    })
});
*/

/* DELEGACION DE EVENTO -> consiste en "ir hacia arriba" en el arbol de HTML */

// Para tener una mejor funcionalidad y que sea dinamico, se puede agregar el evento al contenedor padre donde estan los botones, en lugar de a cada boton individualmente
const jobsListingSection = document.querySelector('.jobs-listings'); // elemento padre

jobsListingSection.addEventListener('click', function(event){
    const element = event.target; // Nos ayuda a identificar que elemento del html recibe el click
    if(element.classList.contains('button-apply-job')){ // "si la lista de clases que tiene el elemento (contenedor padre) contiene button-apply-job, ejecuta:"
        element.classList.add('is-applied')
        element.textContent = '¡Aplicado!'
        element.disabled = true
    }
});
