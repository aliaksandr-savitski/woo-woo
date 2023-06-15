// import { Carousel } from 'components/carousel';
import { Suspense } from 'react';
import { getProducts } from 'src/app/products/api/getProducts';
import ProductsList from 'src/app/products/components/ProductsList';
import { ThreeItemGrid } from 'src/app/components/grid/three-items';
import Footer from 'src/app/components/layout/footer';

export const runtime = 'edge';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        {/* <Carousel /> */}
        <Suspense>
          <ProductsList products={products} />
        </Suspense>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
