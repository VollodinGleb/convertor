const initialState = {
    toCurrency: '',
    amount: 1,
    exchangeRate: null,
    currencyOptions: [],
    convertedAmount: null,
  };
  
  const currencyConverterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TO_CURRENCY':
        return { ...state, toCurrency: action.payload };
      case 'SET_AMOUNT':
        return { ...state, amount: action.payload };
      case 'SET_EXCHANGE_RATE':
        return { ...state, exchangeRate: action.payload };
      case 'SET_CURRENCY_OPTIONS':
        return { ...state, currencyOptions: action.payload };
      case 'SET_CONVERTED_AMOUNT':
        return { ...state, convertedAmount: action.payload };
      default:
        return state;
    }
  };
  
  export default currencyConverterReducer;
  