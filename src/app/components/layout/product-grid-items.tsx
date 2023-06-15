import Link from 'next/link';
import Grid from 'src/app/components/grid';
import { GridTileImage } from 'src/app/components/grid/tile';
import { Product } from 'src/lib/woocommerce/types';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              labels={{
                isSmall: true,
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}
