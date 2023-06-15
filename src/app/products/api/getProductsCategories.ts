import { APP_CONFIG } from 'src/config';

export const getProductsCategories = async () => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products/categories`);
  const { data } = await res.json();

  return data;
};
