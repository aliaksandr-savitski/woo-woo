import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCollection } from 'src/lib/woocommerce';

import Grid from 'src/app/components/grid';
import ProductGridItems from 'src/app/components/layout/product-grid-items';
import { defaultSort, sorting } from 'src/lib/constants';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const collection = await getCollection(params.collection);

  if (!collection) return notFound();

  return {
    title: collection.seo?.title || collection.title,
    description:
      collection.seo?.description || collection.description || `${collection.title} products`,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(collection.title)}`,
          width: 1200,
          height: 630
        }
      ]
    }
  };
}

export default async function CategoryPage({
  params,
  searchParams
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  const products = [
    {
      id: '',
      handle: '',
      availableForSale: true,
      title: '',
      description: '',
      descriptionHtml: '',
      options: [
        {
          id: '',
          name: '',
          values: ['']
        }
      ],
      priceRange: {
        maxVariantPrice: {
          amount: '109.99',
          currencyCode: 'PLN'
        },
        minVariantPrice: {
          amount: '79.99',
          currencyCode: 'PLN'
        }
      },
      featuredImage: { url: '', altText: '', width: 500, height: 500 },
      variants: [
        {
          id: '',
          title: '',
          availableForSale: true,
          selectedOptions: [
            {
              name: '',
              value: ''
            }
          ],
          price: {
            amount: '99.99',
            currencyCode: 'PLN'
          }
        }
      ],
      images: [{ url: '', altText: '', width: 500, height: 500 }],
      seo: {
        title: '',
        description: ''
      },
      tags: ['tag1'],
      updatedAt: '<updatedAt-date />'
    }
  ];

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      )}
    </section>
  );
}
