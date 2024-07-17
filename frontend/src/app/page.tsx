"use client"
import React, { useState } from 'react';
import PriceTable from './components/priceTable';
import SymbolModal from './components/SymbolModal';

const Home = () => {
  const [symbol, setSymbol] = useState('BTC');

  return (
    <div className='container'>
      <h1>Real-Time Stock Price Tracker</h1>
      <SymbolModal setSymbol={setSymbol} symbol={symbol} />
      <PriceTable symbol={symbol} />
    </div>
  );
};

export default Home;
