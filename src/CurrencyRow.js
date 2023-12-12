// CurrencyRow.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToCurrency, setAmount } from './store/currencyActions';

export default function CurrencyRow() {
  const dispatch = useDispatch();
  const { toCurrency, amount, exchangeRate, currencyOptions } = useSelector((state) => state);

  console.log('CurrencyOptions:', currencyOptions);

  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={(e) => dispatch(setAmount(e.target.value))}
      />
      <select value={toCurrency} onChange={(e) => dispatch(setToCurrency(e.target.value))}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}