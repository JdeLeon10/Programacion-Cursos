/*
    index.js es el archivo principal de nuestro proyecto, donde configuraremos el servidor Express
*/

import express from 'express'; // Importar Express
import mysql from 'mysql2/promise'; // Importar mysql2 con soporte para promesas

const app = express(); // Crear una instancia de Express
const port = 3000; // Definir el puerto en el que escuchará el servidor
app.use(express.json()); // Middleware para parsear JSON

app.listen(port, () => { console.log(`Servidor en http://localhost:${port}/users/`)});

/*
    Implementacion de rutas para crud
*/

// Conexion a la base de datos
const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jeere8520',
    database: 'users_db'
});

// Ruta GET para verificar todos los usuarios
app.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users')
        res.json(rows); // Responder con los usuarios obtenidos de la base de datos
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ruta GET para verificar usuarios por ID
app.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    
    try{
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [userId]) // Utilizar consultas parametrizadas para evitar inyecciones SQL;

        // Si no encuentra el usuario del ID, devolvera un arreglo vacio
        if(rows.length === 0){
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ruta POST para crear un nuevo usuario
// Los datos del nuevo usuario se pasan a traves de req.body
app.post('/users', async (req, res) => {
    const name = req.body.name; // Obtener el nombre del nuevo usuario desde el cuerpo de la solicitud
    const age = req.body.age; // Obtener la edad del nuevo usuario desde el cuerpo de la solicitud

    try{
        const [rows] = await pool.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);
        return res.status(201).json({ message: 'Usuario creado', user: { name, age } });
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});

// Ruta PUT para actualizar un usuario existente
app.put('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    const name = req.body.name; // Nuevo nombre
    const age = req.body.age; // Nueva edad

    try {
        const [rows] = await pool.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, userId]);

        if (rows.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario actualizado', user: { id: userId, name, age } });
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});


// Ruta DELETE para eliminar un usuario
app.delete('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id); // req.params.id -> Obtener el ID de los parámetros de la ruta -> /users/1 -> id = "1"
    
    try{
        const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [userId]) // Utilizar consultas parametrizadas para evitar inyecciones SQL;

        // Si no encuentra el usuario del ID, devolverá un arreglo vacío
        if(rows.affectedRows === 0){
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado' });

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});