import { users } from '../models/users.models.js';

/*
    Implementacion de rutas para crud
*/

// Ruta GET para verificar todos los usuarios
export const getUsers = (req, res) => {
    res.json(users); // Responder con el array de usuarios en formato JSON
};

// Ruta GET para verificar usuarios por ID
export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    const user = users.find(x => x.id === userId);
    
    if(!user){
        return res.json({ message: 'Usuario no encontrado' });
    }

    res.json(user); // Responder con el usuario encontrado
};

// Ruta POST para crear un nuevo usuario
// Los datos del nuevo usuario se pasan a traves de req.body
export const createUser = (req, res) => {
    const {name} = req.body; // Obtener el nombre del nuevo usuario desde el cuerpo de la solicitud
    const newUser = { id: users.length + 1, name }; // Crear un nuevo usuario con un ID único

    users.push(newUser); // Agregar el nuevo usuario al arreglo de usuarios
    res.json({ message: 'Usuario creado', user: newUser.name }); // Responder con un mensaje de éxito y el nuevo usuario
};

// Ruta PUT para actualizar un usuario existente
export const updateUser = (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    const user = users.find(x => x.id === userId);
    
    if(!user){
        return res.json({ message: 'Usuario no encontrado' });
    }

    const {name} = req.body; // Nuevo nombre
    user.name = name;
    res.json({ message: 'Usuario actualizado', user });
};

// Ruta DELETE para eliminar un usuario
export const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    
    const user = users.find(x => x.id === userId); // Verificar si el usuario existe antes de eliminarlo
    if(!user){
        return res.json({ message: 'Usuario no encontrado' });
    }
    
    const userIndex = users.findIndex(x => x.id === userId);
    users.splice(userIndex, 1); // Elimina el usuario del arreglo original sin reasignar la referencia importada
    res.json({ message: 'Usuario eliminado' });
};