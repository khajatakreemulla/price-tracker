"use client"
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import stockReducer from './priceSlice';

const store = configureStore({
  reducer: {
    stock: stockReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
