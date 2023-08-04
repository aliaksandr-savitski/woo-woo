'use client';

import { Image } from 'src/lib/woocommerce/types';

interface Props {
  images: Required<Image>[];
}

const ProductGallery = ({ images }: Props) => (
  <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
      {images[0] && (
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="h-full w-full object-cover object-center"
        />
      )}
    </div>
    {images.length > 1 ? (
      <>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          {images.slice(1, 2).map((image) => (
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        {images[3] ? (
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ) : null}
      </>
    ) : null}
  </div>
);

export default ProductGallery;
