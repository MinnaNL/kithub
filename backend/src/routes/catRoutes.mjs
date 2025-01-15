import express from 'express';
import { getCats, getCatById } from '../controllers/catController.mjs';

const router = express.Router();

router.get('/cats', getCats);
router.get('/cats/:id', getCatById);

export default router;