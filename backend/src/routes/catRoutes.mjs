import express from 'express';
import { getCats, getCatById } from '../controllers/catController.mjs';

const router = express.Router();

// Define routes using router.route
router.route('/cats').get(getCats);
router.route('/cats/:id').get(getCatById);

export default router;