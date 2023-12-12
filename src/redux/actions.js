export const SET_CURRENCY_OPTIONS = 'SET_CURRENCY_OPTIONS';
export const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
export const SET_EXCHANGE_RATE = 'SET_EXCHANGE_RATE';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_CONVERTED_AMOUNT = 'SET_CONVERTED_AMOUNT';

export const setCurrencyOptions = (options) => ({
  type: SET_CURRENCY_OPTIONS,
  payload: options,
});

export const setToCurrency = (currency) => ({
  type: SET_TO_CURRENCY,
  payload: currency,
});

export const setExchangeRate = (rate) => ({
  type: SET_EXCHANGE_RATE,
  payload: rate,
});

export const setAmount = (amount) => ({
  type: SET_AMOUNT,
  payload: amount,
});

export const setConvertedAmount = (convertedAmount) => ({
  type: SET_CONVERTED_AMOUNT,
  payload: convertedAmount,
});
