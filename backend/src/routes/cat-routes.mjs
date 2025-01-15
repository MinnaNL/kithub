import express from 'express';
import { getCats, getCatById } from '../controllers/cat-controller.mjs';

const router = express.Router();

// Define routes using router.route
router.route('/').get(getCats);
router.route('/:id').get(getCatById);

export default router;