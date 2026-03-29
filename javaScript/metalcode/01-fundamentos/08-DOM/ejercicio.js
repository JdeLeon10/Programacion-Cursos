/*
class TaskForm{
    constructor(idForm, idInput, idList){
        this.frm = document.querySelector(idForm);
        this.input = document.querySelector(idInput);
        this.list = document.querySelector(idList);
    }

    build(){
        this.frm.addEventListener("submit", (event) => {
            event.preventDefault();

            const description = this.input.value;
            const btn = this.#createButtonDelete();
            const li = document.createElement("li");

            li.innerText = `${description} - ${new Date().toLocaleDateString()}`;
            li.appendChild(btn);

            this.list.appendChild(li);

            this.frm.reset();
        });
    }

    // Método privado
    #createButtonDelete(){
        const btn = document.createElement("button");
        btn.innerText = "Eliminar";
        btn.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        });
        return btn;
    }
}

const taskForm = new TaskForm("#frm", "#txtDescription", "#ulList");
taskForm.build();
*/

// 1. Buscar los elementos del DOM
const frm = document.querySelector("#frm");
const input = document.querySelector("#txtDescription");
const list = document.querySelector("#ulList");

// 2. Función para crear el botón eliminar
function createButtonDelete() {
    const btn = document.createElement("button");
    btn.innerText = "Eliminar tarea";

    btn.addEventListener("click", () => {
        const li = btn.parentNode;
        li.remove();
    });

    return btn;
}

// 3. Evento submit del formulario
frm.addEventListener("submit", (event) => {
    // Evita que la pagina se recargue
    event.preventDefault();

    const description = input.value;

    const li = document.createElement("li");
    const btn = createButtonDelete();

    li.innerText = `${description} - ${new Date().toLocaleDateString()}`;
    // Mete el boton dentro de li
    li.appendChild(btn);

    // Mete li dentro de list (ul)
    list.appendChild(li);

    frm.reset();
});
