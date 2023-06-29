import { Suspense } from 'react';
import { getProducts } from 'src/app/products/api/getProducts';
import ProductsList from 'src/components/ProductsList';

export const runtime = 'edge';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Suspense>
        <ProductsList products={products} />
      </Suspense>
    </>
  );
}
