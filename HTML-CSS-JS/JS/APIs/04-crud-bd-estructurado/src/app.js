import express from 'express';
import productosRoutes from './routes/productos.js';
import inventarioRoutes from './routes/inventario.js';

const app = express();

app.use(express.json());

// Rutas
app.use('/productos', productosRoutes);
app.use('/inventario', inventarioRoutes);

export default app;