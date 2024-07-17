"use client";
import React from 'react';

interface SymbolModalProps {
  symbol: string;
  setSymbol: (symbol: string) => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({ symbol, setSymbol }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSymbol(e.target.value); // Update the symbol state with the selected value
  };

  return (
    <div>
      <select value={symbol} onChange={handleChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="BNB">BNB</option>
        <option value="SOL">SOL</option>
        <option value="USDT">USDT</option>
      </select>
    </div>
  );
};

export default SymbolModal;
