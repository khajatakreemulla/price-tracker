"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from './store';

interface StockState {
  data: Array<{
      createdAt: string | number | Date;
      _id: String | null | undefined;
      rate: Number;
      code: String
}>;
  loading: boolean;
}

const initialState: StockState = {
  data: [],
  loading: false,
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setStockData(state:any, action: PayloadAction<Array<{ timestamp: string, price: number }>>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setStockData, setLoading } = stockSlice.actions;

export const fetchStockData = (symbol: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:3001/stock/${symbol}`);
    dispatch(setStockData(response.data));
  } catch (error) {
    console.error('Failed to fetch stock data', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default stockSlice.reducer;
