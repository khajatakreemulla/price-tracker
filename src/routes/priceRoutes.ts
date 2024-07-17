import express from 'express';
import { fetchPricesAndSymbols, getStockPrice } from '../controllers/priceController';

const router = express.Router();

router.get('/stock/list', fetchPricesAndSymbols)
router.get("/stock/:symbol", getStockPrice)

export default router;