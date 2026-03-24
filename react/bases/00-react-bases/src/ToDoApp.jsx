import "./ToDoApp.css";
import { useState } from "react";

export const ToDoApp = () => {
  const [tasks, setTasks] = useState(["Lavar el carro", "Revisar tareas U"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value); // Actualiza el estado con el valor del input cada vez que cambia
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Evita agregar tareas vacías

    setTasks([...tasks, newTask]); // Agrega la nueva tarea al array de tareas
    setNewTask(""); // Limpia el input después de agregar la tarea
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Crea un nuevo array sin la tarea eliminada
    setTasks(updatedTasks); // Actualiza el estado con el nuevo array de tareas
  };

  const moveTaskUp = (index) => {
    if (index === 0) return; // No se puede mover hacia arriba si es la primera tarea

    const updatedTasks = [...tasks];
    [updatedTasks[index - 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index - 1],
    ]; // Intercambia la tarea con la anterior
    setTasks(updatedTasks); // Actualiza el estado con el nuevo orden de tareas
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return; // No se puede mover hacia abajo si es la última tarea

    const updatedTasks = [...tasks];
    [updatedTasks[index + 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index + 1],
    ]; // Intercambia la tarea con la siguiente
    setTasks(updatedTasks); // Actualiza el estado con el nuevo orden de tareas
  };

  return (
    <div className="to-do-list">
      <h1>ToDo App</h1>
      <div>
        <input
          className="input-todo"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="add-task-button button-task" onClick={handleAddTask}>
          Add Task
        </button>

        <ol className="ol-todo">
          {tasks.map((task, index) => (
            <li className="il-todo" key={index}>
              <span className="task-text">{task}</span>
              <button
                className="delete-task-button button-task"
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </button>
              <button
                className="move-up-task-button button-task"
                onClick={() => moveTaskUp(index)}
              >
                ⬆
              </button>
              <button
                className="move-down-task-button button-task"
                onClick={() => moveTaskDown(index)}
              >
                ⬇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
