import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currencyReducer';

const store = configureStore({
  reducer: currencyReducer,
  // Add middleware or other configuration options if needed
});

export default store;
