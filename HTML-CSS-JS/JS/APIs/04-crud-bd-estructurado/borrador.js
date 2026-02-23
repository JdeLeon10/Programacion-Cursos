import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const app = express(); // Instancia de Express
const port = process.env.PORT || 3000;
app.use(express.json()); // Middleware para parsear JSON

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Servidor
app.listen(port, () => { console.log(`Servidor corriendo en http://localhost:${port}`); });

// GET Productos
app.get('/productos', async (req, res) => {
    try {
        const [result] = await pool.query(
            'SELECT * FROM productos'
            );

        res.json(result);
    }
    catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }   
});

// GET Productos por ID
app.get('/productos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const [result] = await pool.query(
            'SELECT * FROM productos WHERE id_producto = ?', [id]
            );

        if (result.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(result[0]);
    }
    catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ error: 'Error al obtener producto' });
    }   
});

// POST Crear producto
app.post('/productos', async (req, res) => {
    const { codigo_producto, nombre_producto, categoria, sub_categoria, marca } = req.body;

    try{
        const [result] = await pool.query(
            'INSERT INTO productos (codigo_producto, nombre_producto, categoria, sub_categoria, marca) VALUES (?, ?, ?, ?, ?)',
            [codigo_producto, nombre_producto, categoria, sub_categoria, marca]
        );

        res.status(201).json({ id: result.insertId, codigo_producto, nombre_producto, categoria, sub_categoria, marca });
    }
    catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({ error: 'Error al crear producto' });
    }
});

// PUT Actualizar producto
app.put('/productos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { codigo_producto, nombre_producto, categoria, sub_categoria, marca } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE productos SET codigo_producto = ?, nombre_producto = ?, categoria = ?, sub_categoria = ?, marca = ? WHERE id_producto = ?',
            [codigo_producto, nombre_producto, categoria, sub_categoria, marca, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ id, codigo_producto, nombre_producto, categoria, sub_categoria, marca });
    }
    catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
});

// DELETE Eliminar producto
app.delete('/productos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const [result] = await pool.query(
            'DELETE FROM productos WHERE id_producto = ?', [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Producto eliminado' });
    }
    catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
});

// GET Inventario -> Revisar existencia de productos y respectivos
app.get('/inventario', async (req, res) => {
    try {
        const [result] = await pool.query('CALL sp_inventario_existencias()');
        res.json(result[0]);
    }
    catch (error) {
        console.error('Error al obtener inventario:', error);
        res.status(500).json({ error: 'Error al obtener inventario' });
    }   
});

// POST Añadir producto a inventario
app.post('/inventario', async (req, res) => {

    const { codigo_producto, fecha_ingreso, cantidad, costo, fecha_vencimiento } = req.body;

    try{
        const [result] = await pool.query(
            `
            INSERT INTO inventarios (fecha_ingreso, cantidad, costo, fecha_vencimiento, id_producto)
            SELECT ?, ?, ?, ?, p.id_producto
            FROM productos p
            WHERE p.codigo_producto = ?
            `,
            [
                fecha_ingreso,                 // 'YYYY-MM-DD'
                parseInt(cantidad),
                parseFloat(costo),
                fecha_vencimiento || null,     // permite null
                codigo_producto
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }   
        
        res.status(201).json({ message: 'Producto añadido' });
    }

    catch (error) {
        console.error('Error al añadir producto al inventario:', error);
        res.status(500).json({ error: 'Error al añadir producto al inventario' });
    }
});

// PUT Actualizar inventario
app.put('/inventario/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { fecha_ingreso, cantidad, costo, fecha_vencimiento } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE inventarios SET fecha_ingreso = ?, cantidad = ?, costo = ?, fecha_vencimiento = ? WHERE id_inventario = ?',
            [
                fecha_ingreso,                 // 'YYYY-MM-DD'
                parseInt(cantidad),
                parseFloat(costo),
                fecha_vencimiento || null,     // permite null
                id
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Inventario no encontrado' });
        }

        res.json({ id, fecha_ingreso, cantidad, costo, fecha_vencimiento });
    }
    catch (error) {
        console.error('Error al actualizar inventario:', error);
        res.status(500).json({ error: 'Error al actualizar inventario' });
    }
});

// DELETE Eliminar inventario
app.delete('/inventario/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const [result] = await pool.query(
            'DELETE FROM inventarios WHERE id_inventario = ?', [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Inventario no encontrado' });
        }

        res.json({ message: 'Inventario eliminado' });
    }
    catch (error) {
        console.error('Error al eliminar inventario:', error);
        res.status(500).json({ error: 'Error al eliminar inventario' });
    }
});