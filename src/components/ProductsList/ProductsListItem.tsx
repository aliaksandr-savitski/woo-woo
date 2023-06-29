import Link from 'next/link';

import { Product } from 'src/lib/woocommerce/types';

interface Props {
  product: Product;
}

const ProductsListItem = ({ product }: Props) => {
  const [image] = product.images;

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {image?.src ? (
          <img
            src={image.src}
            alt={product.name}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        ) : null}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${product.id}/${product.slug}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.name}
            </Link>
          </h3>
          {/* {colorAttributes.options.map((option) => (
            <p className="mt-1 text-sm text-gray-500">{option}</p>
          ))} */}
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductsListItem;
