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

// PUT Inventario por código de producto (actualiza la última entrada)
export const updateInventarioByCodigo = async (req, res) => {
    const codigo = req.params.codigo;
    const { fecha_ingreso, cantidad, costo, fecha_vencimiento } = req.body;

    try {
        const [targetRows] = await pool.query(
            `
            SELECT i.id_inventario
            FROM inventario i
            JOIN productos p ON p.id_producto = i.id_producto
            WHERE p.codigo_producto = ?
            ORDER BY i.id_inventario DESC
            LIMIT 1
            `,
            [codigo]
        );

        if (targetRows.length === 0) {
            return res.status(404).json({ error: 'No se encontró una entrada de inventario para ese código de producto' });
        }

        const targetId = targetRows[0].id_inventario;

        await pool.query(
            `
            UPDATE inventario
            SET fecha_ingreso = ?, cantidad = ?, costo = ?, fecha_vencimiento = ?
            WHERE id_inventario = ?
            `,
            [
                fecha_ingreso,
                parseInt(cantidad),
                parseFloat(costo),
                fecha_vencimiento || null,
                targetId
            ]
        );

        const [rows] = await pool.query(
            `
            SELECT
                i.id_inventario,
                p.codigo_producto,
                i.fecha_ingreso,
                i.cantidad,
                i.costo,
                i.fecha_vencimiento
            FROM inventario i
            JOIN productos p ON p.id_producto = i.id_producto
            WHERE i.id_inventario = ?
            `,
            [targetId]
        );

        res.json({
            message: 'Entrada de inventario actualizada',
            inventario: rows[0]
        });
    }
    catch (error) {
        console.error('Error al actualizar inventario por código:', error);
        res.status(500).json({ error: 'Error al actualizar inventario' });
    }
};