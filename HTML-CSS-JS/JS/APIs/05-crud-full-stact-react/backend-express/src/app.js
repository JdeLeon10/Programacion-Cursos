import express from 'express';
import productosRoutes from './routes/productos.routes.js';
import inventarioRoutes from './routes/inventario.routes.js';
import cors from 'cors';

const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use(cors()); // Middleware para habilitar CORS para permitir solicitudes desde el frontend

// Rutas
app.use('/productos', productosRoutes);
app.use('/inventario', inventarioRoutes);

export default app;