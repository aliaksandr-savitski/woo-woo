import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCategoryProducts } from 'src/services/wooCommerceApi/getCategoryProducts';

import CategoryPageHeader from './CategoryPageHeader';
import CategoryList from './CategoryList';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const [categorySlug] = params.handle.slice(-1);

  if (!categorySlug || typeof categorySlug !== 'string') {
    return notFound();
  }

  const products = await getCategoryProducts(categorySlug);
  const category = products[0]?.categories.find((category) => category.slug === categorySlug);

  if (!products || !category) return notFound();

  const { src } = category.image || {};

  return {
    title: category.name,
    description: category.description || '',
    /**
     * TODO: dynamic set indexing
     */
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    },
    openGraph: src ? { images: src } : null
  };
}

const CategoryPage = async ({ params }: { params: { handle: string[] } }) => {
  const [categorySlug] = params.handle.slice(-1);

  if (!categorySlug || typeof categorySlug !== 'string') {
    return notFound();
  }

  const products = await getCategoryProducts(categorySlug);
  const category = products[0]?.categories.find((category) => category.slug === categorySlug);

  if (!products || !category) return notFound();

  return (
    <div className=" mx-auto max-w-7xl items-center justify-between px-6 pb-16 lg:px-8 lg:pb-24">
      <CategoryPageHeader title={category.name as string} />

      <Suspense>
        <CategoryList products={products} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
