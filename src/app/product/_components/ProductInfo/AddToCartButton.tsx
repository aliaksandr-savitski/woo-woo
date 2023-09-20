'use client';

import { useDispatch } from 'react-redux';

import { Product } from 'src/types';
import { cartActions } from 'src/modules/cart/cartSlice';

const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const cartData = {
      id: product.id,
      quantity: 1,
      name: product.name,
      price: product.price
    };

    dispatch(cartActions.add(cartData));
  };

  return (
    <button
      type="button"
      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={addToCart}
    >
      Add to bag
    </button>
  );
};

export default AddToCartButton;
