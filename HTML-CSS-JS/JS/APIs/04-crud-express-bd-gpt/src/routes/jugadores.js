const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET todos los jugadores
router.get('/', async (req, res) => {
    try {
        // Obtener todos los jugadores de la base de datos
        const [rows] = await pool.query(
            'SELECT * FROM jugadores'
        );
        // Devolver los jugadores como respuesta JSON
        res.json(rows);

    } catch (error) {
        console.error('Error al obtener los jugadores:', error);
        res.status(500).json({ error: 'Error al obtener los jugadores' });
    }
});

// GET por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await pool.query(
            'SELECT * FROM jugadores WHERE id = ?', 
            [parseInt(id)]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }

        res.json(rows[0]);

    } catch (error) {
        console.error('Error al obtener el jugador:', error);
        res.status(500).json({ error: 'Error al obtener el jugador' });
    }
});

// POST 
router.post('/', async (req, res) => {
    try {

        const { nombre, equipo } = req.body;

        if (!nombre || !equipo) {
            return res.status(400).json({ error: 'Faltan campos requeridos: nombre y equipo' });
        }

        const [result] = await pool.query(
            'INSERT INTO jugadores (nombre, equipo) VALUES (?, ?)', 
            [nombre, equipo]
        );

        res.status(201).json({ id: result.insertId, nombre, equipo });

    } catch (error) {
        console.error('Error al crear el jugador:', error);
        res.status(500).json({ error: 'Error al crear el jugador' });
    }
});

// PUT 
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, equipo } = req.body;

        if (!nombre || !equipo) {
            return res.status(400).json({ error: 'Faltan campos requeridos: nombre y equipo' });
        }

        const [result] = await pool.query(
            'UPDATE jugadores SET nombre = ?, equipo = ? WHERE id = ?', 
            [nombre, equipo, parseInt(id)]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }

        res.json({ id, nombre, equipo });

    } catch (error) {
        console.error('Error al actualizar el jugador:', error);
        res.status(500).json({ error: 'Error al actualizar el jugador' });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await pool.query(
            'DELETE FROM jugadores WHERE id = ?', 
            [parseInt(id)]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Jugador no encontrado' });
        }

        res.json({ message: 'Jugador eliminado correctamente' });

    } catch (error) {
        console.error('Error al eliminar el jugador:', error);
        res.status(500).json({ error: 'Error al eliminar el jugador' });
    }
});

module.exports = router;