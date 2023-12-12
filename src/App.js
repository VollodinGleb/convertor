import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyRow from './CurrencyRow';
import { setToCurrency, setAmount, setExchangeRate } from './store/currencyActions';

const BASE_URL = 'https://v6.exchangerate-api.com/v6/0a4dd460b29ea49944742494/latest/USD';

function App() {
  const dispatch = useDispatch();
  const { toCurrency, amount, exchangeRate } = useSelector((state) => state);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.conversion_rates || {})[0];
        dispatch(setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates || {})]));
        dispatch(setToCurrency(firstCurrency));
        dispatch(setExchangeRate(data.conversion_rates ? data.conversion_rates[firstCurrency] : null));
      })
      .catch((error) => {
        console.error('Error fetching exchange rates:', error);
      });
  }, []);
  
  useEffect(() => {
    if (toCurrency != null) {
      fetch(`${BASE_URL}?base=USD&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.conversion_rates && data.conversion_rates[toCurrency]) {
            dispatch(setExchangeRate(data.conversion_rates[toCurrency]));
          } else {
            console.error('Invalid data received:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching exchange rates:', error);
        });
    }
  }, [toCurrency]);
  
  useEffect(() => {
    if (exchangeRate != null) {
      dispatch(setConvertedAmount(amount * exchangeRate));
    }
  }, [amount, exchangeRate]);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        // Додайте необхідні властивості для CurrencyRow, такі як currencyOptions і setCurrencyOptions
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(value) => dispatch(setToCurrency(value))}
        amount={amount}
        onChangeAmount={(value) => dispatch(setAmount(value))}
      />
      {convertedAmount != null && (
        <p>
          {amount} USD is equal to {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      )}
    </>
  );
}

export default App;