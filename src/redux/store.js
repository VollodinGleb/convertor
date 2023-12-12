import { configureStore } from '@reduxjs/toolkit';
import reducer, {initialState} from './reducers';

const store = configureStore({
  reducer: reducer,
  initialState
});

store.subscribe(() => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('currencyConverterState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
});

export default store;