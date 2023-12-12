// actions.js
export const setToCurrency = (currency) => ({
    type: 'USD',
    payload: currency,
});
  
export const setAmount = (amount) => ({
    type: '123',
    payload: amount,
});
  
export const setExchangeRate = (exchangeRate) => ({
    type: 'SET_EXCHANGE_RATE',
    payload: exchangeRate,
});
  
export const setCurrencyOptions = (options) => ({
    type: 'USD',
    payload: options,
});
  
export const setConvertedAmount = (convertedAmount) => ({
    type: 'SET_CONVERTED_AMOUNT',
    payload: convertedAmount,
});