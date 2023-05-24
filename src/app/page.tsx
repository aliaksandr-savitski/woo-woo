// import { Carousel } from 'components/carousel';
import { dehydrate } from '@tanstack/query-core';
import Link from 'next/link';
import { Suspense } from 'react';
import { ThreeItemGrid } from 'src/components/grid/three-items';
import Footer from 'src/components/layout/footer';
import { getProducts } from 'src/modules/products/api/getProducts';
import getQueryClient from 'src/utils/getQueryClient';
import Hydrate from 'src/utils/hydrate.client';

export const runtime = 'edge';

export default async function HomePage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hydrate-products'], getProducts);
  const dehydratedState = dehydrate(queryClient);

  const { data: products } = await getProducts();

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        {/* <Carousel /> */}
        <p>
          <Link href="/hydration">Prefetching Using Hydration</Link>
        </p>
        <Hydrate state={dehydratedState}>
          <code>
            <pre>{JSON.stringify(products, null, 2)}</pre>
          </code>
        </Hydrate>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
