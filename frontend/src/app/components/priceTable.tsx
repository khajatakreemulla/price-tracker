"use client"
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchStockData } from '../redux/priceSlice';
import "bootstrap/dist/css/bootstrap.min.css"

const StockTable = ({ symbol }: { symbol: string }) => {
  const dispatch = useAppDispatch();
  const { data, loading } = useSelector((state: RootState) => state.stock);

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchStockData(symbol));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <table className='container'>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry._id}>
            <td>{entry.code}</td>
            <td>{entry.rate}</td>
            <td>{`${new Date(entry.createdAt).getHours()} : ${new Date(entry.createdAt).getMinutes()}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
