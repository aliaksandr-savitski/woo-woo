import { APP_CONFIG } from 'src/config';

export const getProducts = async () => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products`);
  const { data } = await res.json();

  return data;
};
