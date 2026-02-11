// Modificacion de p desde el DOM
const parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "Hola Mundo desde el DOM";

// Modificacion de boton desde el DOM
const buttonSubmit = document.getElementById("btn-submit");
buttonSubmit.textContent = "Enviar Datos";
buttonSubmit.style.backgroundColor = "blue";
buttonSubmit.style.color = "white";
buttonSubmit.style.padding = "10px 20px";
buttonSubmit.style.borderRadius = "5px";
buttonSubmit.style.cursor = "pointer";

// Creacion de nuevo parrafo desde JS
const nuevoParrofo = document.createElement("p");
nuevoParrofo.textContent = "Este es un nuevo párrafo creado con JavaScript.";
document.body.appendChild(nuevoParrofo);

// Creacion de elementos li desde el DOM
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
buttonSubmit.addEventListener("click", ()=> {
    buttonSubmit.style.backgroundColor = "green";
    buttonSubmit.textContent = "Clickeado";
});

// Boton creado con JS y eventos añadidos
const buttonJS = document.createElement("button");
buttonJS.textContent = "Botón creado con JS";
document.body.appendChild(buttonJS);

buttonJS.addEventListener("mouseover", ()=> {
    buttonJS.textContent = "Mouse Over";
});

// Regresa a su estado original
buttonJS.addEventListener("mouseout", ()=> {
    buttonJS.textContent = "Botón creado con JS";
    buttonJS.style.backgroundColor = "";
} );

buttonJS.addEventListener("dblclick", ()=> {
    buttonJS.style.backgroundColor = "red";
});

// h2 creado desde el DOM añadido al inicio de la pagina con prepend
const newTitle = document.createElement("h2");
const textTest = document.createElement("p");
newTitle.textContent = "Titulo h2 creado desde JS";
textTest.textContent = "Texto de prueba antes de boton enviar datos";
textTest.style.color = "red";
document.body.prepend(newTitle);
// insertBefore (elemento a insertar , antes de quien)
document.body.insertBefore(textTest, buttonJS);