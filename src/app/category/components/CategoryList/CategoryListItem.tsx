import Link from 'next/link';

import { Product } from 'src/lib/woocommerce/types';
import Price from 'src/components/Price';

export const runtime = 'edge';

interface Props {
  product: Product;
}

const CategoryListItem = ({ product }: Props) => {
  const [image] = product.images;

  return (
    <Link href={`/product/${product.id}/${product.slug}`} className="group relative">
      <div className="aspect-h-1 aspect-w-1 block overflow-hidden rounded-lg md:aspect-h-4 md:aspect-w-3">
        {image && (
          <img
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            src={image.src}
            alt="Person using a pen to cross a task off a productivity paper card."
          />
        )}
      </div>
      <div className="mt-4 flex flex-row items-center justify-between text-base font-medium leading-6">
        <h3>{product.name}</h3>
        <Price amount={product.price} className="ml-4" />
      </div>
      <p className="font-sm mt-1 italic leading-4 text-gray-400">3 sizes available</p>
    </Link>
  );
};

export default CategoryListItem;
