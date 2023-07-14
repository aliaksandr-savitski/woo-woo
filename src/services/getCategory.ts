import { APP_CONFIG } from 'src/config';
import { Category } from 'src/lib/woocommerce/types';

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products/categories/${id}`);

  const { data } = await res.json();

  return data;
};
