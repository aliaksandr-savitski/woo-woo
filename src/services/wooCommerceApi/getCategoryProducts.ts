import { APP_CONFIG } from 'src/config';
import { Product } from 'src/lib/woocommerce/WCTypes';

export const getCategoryProducts = async (slug: string): Promise<Product[]> => {
  const res = await fetch(
    `${APP_CONFIG.apiUrl}/products?${new URLSearchParams({ category: slug })}`
  );
  const { data } = await res.json();

  return data;
};
