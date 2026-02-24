import { pool } from '../config/db.js';

// Funciones del crud de productos

// GET Productos
export const getProductos = async (req, res) => {
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
};

// GET Productos por ID
export const getProductoById = async (req, res) => {
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
};

// POST Crear producto
export const createProducto = async (req, res) => {
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
};

// PUT Actualizar producto
export const updateProducto = async (req, res) => {
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

        res.status(201).json({ id, codigo_producto, nombre_producto, categoria, sub_categoria, marca });
    }
    catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

// DELETE Eliminar producto
export const deleteProducto = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const [result] = await pool.query(
            'DELETE FROM productos WHERE id_producto = ?', [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json({ message: 'Producto eliminado correctamente' });
    }
    catch (error) {
        console.error('Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};