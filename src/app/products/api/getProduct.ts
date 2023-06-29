import { APP_CONFIG } from 'src/config';
import { Product } from 'src/lib/woocommerce/types';

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products/${id}`);
  const { data } = await res.json();

  return data;
};
