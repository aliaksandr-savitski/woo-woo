import { WooCommerceProduct } from 'src/lib/woocommerce/types';

export class ResponseNormalizer {
  product(product: WooCommerceProduct) {
    return {
      ...product,
      price: Number(product.price),
      regular_price: Number(product.regular_price),
      sale_price: Number(product.sale_price)
    };
  }
}

const responseNormalizer = new ResponseNormalizer();

export default responseNormalizer;
