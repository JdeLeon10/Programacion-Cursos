const express = require('express');
const jugadoresRouter = require('./routes/jugadores');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Rutas
app.use('/jugadores', jugadoresRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});