import { Router } from 'express';

import {
    getInventario,
    createInventario,
    updateInventario,
    updateInventarioByCodigo,
    deleteInventario
} from '../controllers/inventario.controllers.js';

const router = Router();

// Rutas de inventario
router.get('/', getInventario);
router.post('/', createInventario);
router.put('/codigo/:codigo', updateInventarioByCodigo);
router.put('/:id', updateInventario);
router.delete('/:id', deleteInventario);

export default router;