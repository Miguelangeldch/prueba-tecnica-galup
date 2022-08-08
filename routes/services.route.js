import express from 'express';
import { addService, getServices } from '../controllers/services.controller.js'

const router = express.Router();

router.post('/', addService);
router.get('/', getServices);

export default router;
