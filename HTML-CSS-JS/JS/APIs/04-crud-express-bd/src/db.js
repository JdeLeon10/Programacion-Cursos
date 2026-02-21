// Importamos mysql2/promise para usar promesas en nuestras consultas a la base de datos
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    // Configuración de la conexión a la base de datos utilizando variables de entorno
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // wait connections: true permite que el pool espere a que haya conexiones disponibles en lugar de lanzar un error
    waitForConnections: true,
});

module.exports = pool;