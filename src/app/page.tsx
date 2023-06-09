// import { Carousel } from 'components/carousel';
import { Suspense } from 'react';
import { getProductsDehydratedState } from 'src/app/products/api/getProducts';
import ProductsList from 'src/app/products/components/ProductsList.client';
import { ThreeItemGrid } from 'src/components/grid/three-items';
import Footer from 'src/components/layout/footer';
import Hydrate from 'src/utils/hydrate.client';

export const runtime = 'edge';

export default async function HomePage() {
  const productsDehydratedState = await getProductsDehydratedState();

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        {/* <Carousel /> */}
        <Suspense>
          <Hydrate state={productsDehydratedState}>
            <ProductsList />
          </Hydrate>
        </Suspense>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
