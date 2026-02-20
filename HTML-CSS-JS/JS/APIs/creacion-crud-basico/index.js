import express from "express";

// Crea una instancia de la aplicacion express, dentro de app se definitrar rutas
const app = express();
// Define el puerto de ejecucion
const PORT = 3000;

/* 
    Middleware = función que se ejecuta en el intervalo entre la recepción de una solicitud HTTP (req) y el envío de la respuesta (res) por parte del servidor. 
    intercepta todas las peticiones entrantes y, si el body es JSON, lo parsea automáticamente y lo pone disponible en req.body. Sin esto, req.body sería undefined.
*/
app.use(express.json());

// Base de datos en memoria 
let usuarios = [];

// RUTA TEST get. El callback recibe req (la petición) y res (la respuesta). Solo responde un JSON para confirmar que el servidor está vivo.
app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor funcionando" });
});

// CREATE - POST
app.post("/usuarios", (req, res) => {
  const nuevoUsuario = {
    id: usuarios.length + 1, // crea un nuevo ID basado en la cantidad actual + 1 
    ...req.body // spread: copia todos los campos mandados por el cliente, “agarra todas las propiedades que vienen en req.body y pégalas dentro de este objeto”.
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// READ - GET
app.get("/usuarios", (req, res) => {
  res.json(usuarios); // Devuelve el array como JSON
});

// UPDATE - PUT
app.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id); // :id es un parámetro de ruta dinámico. req.params.id llega como string, por eso se convierte a número con parseInt.
    const usuario = usuarios.find(u => u.id === id); // Busca en el array el usuario cuyo id coincida. Si no existe, usuario será undefined.
    /*
        En Express, cuando pones :algo, significa parametro dinamico
        :id = 5 => Express lo guarda en req.params

        usuarios = usuarios.filter(usuario => usuario.id !== 2); significa Quédate solo con los usuarios cuyo id NO sea 2.
    */

  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }

  Object.assign(usuario, req.body); // Copia las propiedades de req.body sobre el objeto usuario. Como los objetos en JS son por referencia, esto modifica directamente el elemento dentro del array usuarios.
  res.json(usuario); // Devuelve el usuario actualizado
});

// DELETE
app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  // filter crea un nuevo array sin el usuario que tiene ese id. Por eso usuarios se declaró con let, ya que se reasigna completamente aquí.

  res.json({ mensaje: "Usuario eliminado" });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});