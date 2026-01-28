// Definimos un objeto User con varios metodos para manejar las operaciones relacionadas con usuarios
const User = {
    // Cada metodo recibe una solicitud (req) y una respuesta (res) como parametros
    get: (req, res) => {
        res.status(200).send('Obteniendo usuario');
    },
    list: (req, res) => {
        res.status(200).send('Hola mundo desde mi API');
    },
    create: (req, res) => {
        res.status(201).send('Usuario creado');
    },
    update: (req, res) => {
        res.status(204).send('Actualizando usuario');
    },
    delete: (req, res) => {
        res.status(204).send('Eliminando usuario');
    }
}

// Exportamos el objeto User para usarlo en otras partes de la aplicacion
module.exports = User;