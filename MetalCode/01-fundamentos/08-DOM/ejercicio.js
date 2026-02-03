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