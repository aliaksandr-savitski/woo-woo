import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { CartItem, CartState } from './cartTypes';

const initialState: CartState = {
  items: [],
  total: 0.0
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<Omit<CartItem, 'subtotal'>>) => {
      const { id } = payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal += existingItem.price;
        return;
      }

      state.items.push({ ...payload, quantity: 1, subtotal: payload.price });
    },
    remove: (state) => {}
  }
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;
