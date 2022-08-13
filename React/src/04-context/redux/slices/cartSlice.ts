import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart } = cartSlice.actions;
