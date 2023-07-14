import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCategory } from 'src/services/getCategory';
import { getCategoryProducts } from 'src/services/getCategoryProducts';

import CategoryPageHeader from '../components/CategoryPageHeader';
import CategoryList from '../components/CategoryList';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const [categoryId] = params.handle.slice(0, 1);

  if (!categoryId || typeof categoryId !== 'string') {
    return notFound();
  }

  const category = await getCategory(categoryId);

  if (!category) return notFound();

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
  const [categoryId] = params.handle.slice(0, 1);

  if (!categoryId || typeof categoryId !== 'string') {
    return notFound();
  }

  const fetchDataPromises = Promise.all([getCategory(categoryId), getCategoryProducts(categoryId)]);

  const [category, products] = await fetchDataPromises;

  if (!products.length || !category) return notFound();

  return (
    <div className=" mx-auto max-w-7xl items-center justify-between px-6 pb-16 lg:px-8 lg:pb-24">
      <CategoryPageHeader title={category.name} />

      <Suspense>
        <CategoryList products={products} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
