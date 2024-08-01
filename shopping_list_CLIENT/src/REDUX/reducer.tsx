import { createReducer } from '@reduxjs/toolkit';
import { addProduct } from './actions'; // Import the action created earlier
import { BasketState } from '../Interface/BasketState'; // Assuming BasketState interface is defined in a separate file

const initialState: BasketState = {
  products: [],
  quantityAll: 0,
};

const basketReducer = createReducer(initialState, (builder) => {
    builder.addCase(addProduct, (state, action) => {
      const { name, category, quantity } = action.payload;
      const existingProduct = state.products.find((product) => product.name === name);
      state.quantityAll += 1;
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ name, category, quantity });
      }
    });
  });
  
  export default basketReducer;