import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  name: string;
  category: string;
  quantity: number;
}

interface BasketState {
  products: Product[];
  quantityAll:number;
}

const initialState: BasketState = {
  products: [],
  quantityAll:0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      const { name, category, quantity } = action.payload;
      const existingProduct = state.products.find((product) => product.name === name);
        state.quantityAll+=1;
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({ name, category, quantity });
      }
    },
  },
});

export const { addProduct } = basketSlice.actions;
export default basketSlice.reducer;
