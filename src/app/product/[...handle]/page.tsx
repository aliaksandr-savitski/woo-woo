import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Grid from 'src/app/components/grid';
import Footer from 'src/app/components/layout/footer';
import ProductGridItems from 'src/app/components/layout/product-grid-items';
import BreadCrumbs from 'src/app/components/BreadCrumbs';
import { AddToCart } from 'src/app/components/product/add-to-cart';
import ProductGallery from 'src/app/components/product/ProductGallery';
import ProductInfo from 'src/app/components/product/ProductInfo';
import { VariantSelector } from 'src/app/components/product/variant-selector';
import Prose from 'src/app/components/prose';
import { HIDDEN_PRODUCT_TAG } from 'src/lib/constants';
import { getProductRecommendations } from 'src/lib/woocommerce';
import { getProduct } from 'src/app/products/api/getProduct';
import { Image } from 'src/lib/woocommerce/WCTypes';
import { storeSettings } from 'src/lib/woocommerce/store-settings';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const [productId] = params.handle;

  if (!productId) return {};

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

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const [productId] = params.handle;

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

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="pt-6">
        <BreadCrumbs />
        <ProductGallery images={product.images} />
        <ProductInfo product={product} currency={storeSettings.currency} />
      </div>
    </div>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="px-4 py-8">
      <div className="mb-4 text-3xl font-bold">Related Products</div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </div>
  );
}
