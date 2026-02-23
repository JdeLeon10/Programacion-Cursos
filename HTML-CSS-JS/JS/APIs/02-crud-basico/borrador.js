/*
    index.js es el archivo principal de nuestro proyecto, donde configuraremos el servidor Express
*/

import express from 'express'; // Importar Express

const app = express(); // Crear una instancia de Express
const port = 3000; // Definir el puerto en el que escuchará el servidor
app.use(express.json()); // Middleware para parsear JSON

// Ruta "principal" GET
app.get('/', (req, res) => {
    res.send('Puedes utilizar la ruta /users para verificar los usuarios'); // Respuesta para la ruta raíz
});

app.listen(port, () => { console.log(`Servidor en http://localhost:${port}`)});

/*
    Implementacion de rutas para crud
*/

// Arreglo para almacenar usuarios (simulando una base de datos)
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// Ruta GET para verificar todos los usuarios
app.get('/users', (req, res) => {
    res.json(users); // Responder con el array de usuarios en formato JSON
});

// Ruta GET para verificar usuarios por ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    const user = users.find(x => x.id === userId);
    
    if(!user){
        return res.json({ message: 'Usuario no encontrado' });
    }

    res.json(user); // Responder con el usuario encontrado
});

// Ruta POST para crear un nuevo usuario
// Los datos del nuevo usuario se pasan a traves de req.body
app.post('/users', (req, res) => {
    const {name} = req.body; // Obtener el nombre del nuevo usuario desde el cuerpo de la solicitud
    const newUser = { id: users.length + 1, name }; // Crear un nuevo usuario con un ID único

    users.push(newUser); // Agregar el nuevo usuario al arreglo de usuarios
    res.json({ message: 'Usuario creado', user: newUser.name }); // Responder con un mensaje de éxito y el nuevo usuario
});

// Ruta PUT para actualizar un usuario existente
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    const user = users.find(x => x.id === userId);
    
    if(!user){
        return res.json({ message: 'Usuario no encontrado' });
    }

    const {name} = req.body; // Nuevo nombre
    user.name = name;
    res.json({ message: 'Usuario actualizado', user });
});

// Ruta DELETE para eliminar un usuario
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    
    const user = users.find(x => x.id === userId); // Verificar si el usuario existe antes de eliminarlo
    if(!user){
        return res.json({ message: 'Usuario no encontrado' });
    }
    
    users = users.filter(x => x.id !== userId); // Crea un nuevo arreglo de usuarios "eliminando" el usuario con el ID especificado
    res.json({ message: 'Usuario eliminado' });
});