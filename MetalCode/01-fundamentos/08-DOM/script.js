const parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "Hola Mundo desde el DOM";

const buttonSubmit = document.getElementById("btn-submit");
buttonSubmit.textContent = "Enviar Datos";
buttonSubmit.style.backgroundColor = "blue";
buttonSubmit.style.color = "white";
buttonSubmit.style.padding = "10px 20px";
buttonSubmit.style.borderRadius = "5px";
buttonSubmit.style.cursor = "pointer";

const nuevoParrofo = document.createElement("p");
nuevoParrofo.textContent = "Este es un nuevo párrafo creado con JavaScript.";
document.body.appendChild(nuevoParrofo);

const nuevoElementoLista = document.createElement("li");
nuevoElementoLista.textContent = "Elemento de lista añadido dinámicamente";
document.querySelector("ul").appendChild(nuevoElementoLista);

// Debe clonarse porque un elemento solo puede estar en un lugar del DOM
const ElementoAmbasListas = document.createElement("li");
ElementoAmbasListas.textContent = "Elemento añadido a ambas listas";
const elementos = document.querySelectorAll("ul");
// Recorremos las listas y añadimos el elemento clonado a cada una
for (const elemento of elementos) {
    elemento.appendChild(ElementoAmbasListas.cloneNode(true));
}

// Sintaxis de eventos en javascript
buttonSubmit.addEventListener("click", function(){
    buttonSubmit.style.backgroundColor = "green";
    buttonSubmit.textContent = "Clickeado";
});

const buttonJS = document.createElement("button");
buttonJS.textContent = "Botón creado con JS";
document.body.appendChild(buttonJS);

buttonJS.addEventListener("mouseover", function(){
    buttonJS.textContent = "Mouse Over";
});

// Regresa a su estado original
buttonJS.addEventListener("mouseout", function(){
    buttonJS.textContent = "Botón creado con JS";
    buttonJS.style.backgroundColor = "";
} );

buttonJS.addEventListener("dblclick", function(){
    buttonJS.style.backgroundColor = "red";
});