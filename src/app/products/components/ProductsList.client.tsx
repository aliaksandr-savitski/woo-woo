'use client';

import { useProducts } from '../api/getProducts';
import ProductsListItem from './ProductsListItem';

const ProductsList = () => {
  const { data, isLoading, isFetching, error } = useProducts();

  console.log('%c isLoading', isLoading);
  console.log('%c isFetching', isFetching);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {!isFetching && !error
            ? data?.map((product) => <ProductsListItem key={product.id} product={product} />)
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
