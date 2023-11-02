import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProduct,
} from '../controllers/productController.js';

const router = express.Router();

router.post('/create', createProduct);
router.get('/products', getAllProducts);
router.get('/:id', getProduct);

export default router;
