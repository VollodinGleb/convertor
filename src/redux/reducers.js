import {
    SET_CURRENCY_OPTIONS,
    SET_TO_CURRENCY,
    SET_EXCHANGE_RATE,
    SET_AMOUNT,
    SET_CONVERTED_AMOUNT,
} from './actions';
  
const initialState = {
    currencyOptions: [],
    toCurrency: null,
    exchangeRate: null,
    amount: 1,
    convertedAmount: null,
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENCY_OPTIONS:
        return {
          ...state,
          currencyOptions: action.payload,
        };
      case SET_TO_CURRENCY:
        return {
          ...state,
          toCurrency: action.payload,
        };
      case SET_EXCHANGE_RATE:
        return {
          ...state,
          exchangeRate: action.payload,
        };
      case SET_AMOUNT:
        return {
          ...state,
          amount: action.payload,
        };
      case SET_CONVERTED_AMOUNT:
        return {
          ...state,
          convertedAmount: action.payload,
        };
      default:
        return state;
    }
};
  
export default reducer;  