import { APP_CONFIG } from 'src/config';
import type { WooCommerceProduct } from 'src/lib/woocommerce/types';
import type { Product } from 'src/types/index';
import responseNormalizer from 'src/services/responseNormalizer';

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products/${id}`);
  const { data }: { data: WooCommerceProduct } = await res.json();

  return responseNormalizer.product(data);
};
