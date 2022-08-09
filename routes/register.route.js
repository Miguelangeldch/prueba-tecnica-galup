import express from 'express';
import { getRegisters, register, updateRegister, deleteRegister  } from '../controllers/register.controller.js';

const router = express.Router();

router.post('/', register);
router.get('/', getRegisters);
router.put('/:id', updateRegister)
router.delete('/:id', deleteRegister)

export default router;
