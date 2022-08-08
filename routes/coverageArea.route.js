import express from 'express';
import { addZone, getZones, updateZone, deleteZone } from '../controllers/coverageArea.controller.js';

const router = express.Router();

router.post('/', addZone);
router.get('/', getZones);
router.put('/:id', updateZone)
router.delete('/:id', deleteZone)

export default router;
