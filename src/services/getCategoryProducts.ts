import { APP_CONFIG } from 'src/config';
import { Product } from 'src/types';

export const getCategoryProducts = async (id: string): Promise<Product[]> => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products?${new URLSearchParams({ category: id })}`);

  const { data } = await res.json();

  return data;
};
