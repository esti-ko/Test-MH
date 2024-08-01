import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../components/BasketSlice';

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
