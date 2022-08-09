import express from 'express';
import { addService, deleteService, getServices, updateService } from '../controllers/services.controller.js'

const router = express.Router();

router.post('/', addService);
router.get('/', getServices);
router.put('/:id', updateService)
router.delete('/:id', deleteService)

export default router;
