import Prose from 'src/app/components/prose';
import Reviews from 'src/app/components/product/Reviews';
import { Product } from 'src/lib/woocommerce/WCTypes';

interface Props {
  product: Product;
  currency: string;
}

const ProductInfo = ({ product, currency }: Props) => {
  const colorVariants = product.attributes.find(({ name }) => name === 'Color');
  const sizeVariants = product.attributes.find(({ name }) => name === 'Size');

  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {product.name}
        </h1>
      </div>
      {/* Options */}
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">
          {product.price} {currency}
        </p>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <Reviews />
        </div>

        <form className="mt-10">
          {/* Colors */}
          {colorVariants ? (
            <div>
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <fieldset className="mt-4">
                <legend className="sr-only">Choose a color</legend>
                <div className="flex items-center space-x-3">
                  {/*
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    */}

                  {/*
                   * TBD: FIX COLORS
                   */}

                  {colorVariants.options.map((color, index) => (
                    <label
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none"
                      key={color}
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        defaultValue={color}
                        className="sr-only"
                        aria-labelledby={`color-choice-${color}-label`}
                      />
                      <span id={`color-choice-${color}-label`} className="sr-only">
                        White
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-8 w-8 rounded-full border border-black border-opacity-10 bg-${color.toLowerCase()}-700`}
                      />
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          ) : null}

          {/* Sizes */}
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Size guide
              </a>
            </div>
            <fieldset className="mt-4">
              <legend className="sr-only">Choose a size</legend>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="XXS"
                    disabled
                    className="sr-only"
                    aria-labelledby="size-choice-0-label"
                  />
                  <span id="size-choice-0-label">XXS</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                  >
                    <svg
                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="XS"
                    className="sr-only"
                    aria-labelledby="size-choice-1-label"
                  />
                  <span id="size-choice-1-label">XS</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="S"
                    className="sr-only"
                    aria-labelledby="size-choice-2-label"
                  />
                  <span id="size-choice-2-label">S</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="M"
                    className="sr-only"
                    aria-labelledby="size-choice-3-label"
                  />
                  <span id="size-choice-3-label">M</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="L"
                    className="sr-only"
                    aria-labelledby="size-choice-4-label"
                  />
                  <span id="size-choice-4-label">L</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="XL"
                    className="sr-only"
                    aria-labelledby="size-choice-5-label"
                  />
                  <span id="size-choice-5-label">XL</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="2XL"
                    className="sr-only"
                    aria-labelledby="size-choice-6-label"
                  />
                  <span id="size-choice-6-label">2XL</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
                {/* Active: "ring-2 ring-indigo-500" */}
                <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input
                    type="radio"
                    name="size-choice"
                    defaultValue="3XL"
                    className="sr-only"
                    aria-labelledby="size-choice-7-label"
                  />
                  <span id="size-choice-7-label">3XL</span>
                  {/*
                Active: "border", Not Active: "border-2"
                Checked: "border-indigo-500", Not Checked: "border-transparent"
              */}
                  <span
                    className="pointer-events-none absolute -inset-px rounded-md"
                    aria-hidden="true"
                  />
                </label>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
        </form>
      </div>
      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        {/* Description and details */}
        <div>
          <h3 className="sr-only">Description</h3>
          <div className="space-y-6">
            <Prose html={product.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
