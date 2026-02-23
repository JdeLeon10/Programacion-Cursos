import { Router } from 'express';

import {
    getInventario,
    createInventario,
    updateInventario,
    deleteInventario
} from '../controllers/inventario.js';

const router = Router();

// Rutas de inventario
router.get('/', getInventario);
router.post('/', createInventario);
router.put('/:id', updateInventario);
router.delete('/:id', deleteInventario);

export default router;