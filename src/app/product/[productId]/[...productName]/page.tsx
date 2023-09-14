import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import BreadCrumbs from 'src/components/BreadCrumbs';
import { BreadCrumb } from 'src/components/BreadCrumbs';
import ProductGallery from 'src/app/product/_components/ProductGallery';
import ProductInfo from 'src/app/product/_components/ProductInfo';
import { HIDDEN_PRODUCT_TAG } from 'src/lib/constants';
import { getProduct } from 'src/app/products/api/getProduct';
import { storeSettings } from 'src/lib/woocommerce/store-settings';
import { Category } from 'src/lib/woocommerce/types';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { productId: string; productName: string };
}): Promise<Metadata> {
  const { productId } = params;

  if (!productId) return notFound();

  const product = await getProduct(productId);

  if (!product) return notFound();

  const { src, alt } = product.images[0] || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.name,
    description: product.short_description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    },
    openGraph: src
      ? {
          images: [
            {
              url: src,
              alt
            }
          ]
        }
      : null
  };
}

const generateBreadcrumbs = (categories: Category[]) =>
  categories.reduce<BreadCrumb[]>(
    (accumulator, nextValue) =>
      !!accumulator.length && accumulator[accumulator.length - 1]?.href
        ? [
            ...accumulator,
            {
              ...nextValue,
              href: `${accumulator[accumulator.length - 1]?.href || ''}/${nextValue.slug}`
            }
          ]
        : [{ ...nextValue, href: `/${nextValue.slug}` }],
    []
  );

export default async function ProductPage({
  params
}: {
  params: { productId: string; productName: string };
}) {
  const { productId } = params;

  if (!productId || typeof productId !== 'string') {
    return notFound();
  }

  const product = await getProduct(productId);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images[0]?.src,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.in_stock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: storeSettings.currency,
      highPrice: product.regular_price,
      lowPrice: product.sale_price
    }
  };

  const breadcrubs = generateBreadcrumbs(product.categories as Category[]);

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="pt-6">
        <BreadCrumbs items={breadcrubs} />
        {product.images && <ProductGallery images={product.images} />}
        <ProductInfo product={product} currency={storeSettings.currency} />
      </div>
    </div>
  );
}
