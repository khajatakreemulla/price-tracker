import { Request, Response } from 'express';
import Price, { PriceDocument } from '../models/priceModel';
import fetch from "node-fetch"
import config from '../config';

export const fetchPricesAndSymbols = async (): Promise<void> =>{
    try {
        const prices = await fetch("https://api.livecoinwatch.com/coins/list", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-api-key": config.apiKey,
            },
            body: JSON.stringify({
              currency: "USD",
              sort: "rank",
              order: "ascending",
              offset: 0,
              limit: 5,
              meta: false,
            }),
        });
        const data:any = await prices.json();
        for(let priceData of data){
            const stockData = new Price(priceData)
            await stockData.save();
        }
    } catch (error) {
        console.log(error)
    }
}

export const getStockPrice = async (req: Request, res: Response): Promise<void> => {
    try {
        const symbol: string = req.params.symbol;
        const stockData: PriceDocument[] = await Price.find({ code: symbol.toUpperCase() }).sort({ createdAt: -1 })
        .limit(20)
        .lean();
        res.status(200).json(stockData);
    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }
}