import { pool } from '../config/db.js';

// Funciones del crud de inventario

// GET Inventario -> Revisar existencia de productos y respectivos
export const getInventario = async (req, res) => {
    try {
        const [result] = await pool.query('CALL sp_inventario_existencias()');
        res.json(result[0]);
    }
    catch (error) {
        console.error('Error al obtener inventario:', error);
        res.status(500).json({ error: 'Error al obtener inventario' });
    }
};

// Post Inventario
export const createInventario = async (req, res) => {
    const { codigo_producto, fecha_ingreso, cantidad, costo, fecha_vencimiento } = req.body;

    try{
        const [result] = await pool.query(
            `
            INSERT INTO inventario (fecha_ingreso, cantidad, costo, fecha_vencimiento, id_producto)
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
        console.error('Error al crear inventario:', error);
        res.status(500).json({ error: 'Error al crear inventario' });
    }
};

// PUT Inventario
export const updateInventario = async (req, res) => {
    const id = parseInt(req.params.id);
    const { fecha_ingreso, cantidad, costo, fecha_vencimiento } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE inventario SET fecha_ingreso = ?, cantidad = ?, costo = ?, fecha_vencimiento = ? WHERE id_inventario = ?',
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
};  

// DELETE Inventario
export const deleteInventario = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const [result] = await pool.query(
            'DELETE FROM inventario WHERE id_inventario = ?', [id]
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
};