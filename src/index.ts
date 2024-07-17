import express, { Request, Response } from 'express';
import priceRoutes from "./routes/priceRoutes"
import { fetchPricesAndSymbols } from './controllers/priceController';
import db from './db';
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3001;

var whitelist = ["http://localhost:3000"]
app.use(cors({
  origin: whitelist
}))

app.use('/', priceRoutes)

db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      setInterval(fetchPricesAndSymbols, 5000)
      console.log(`Server is running on http://localhost:${PORT}`);
    });
});
