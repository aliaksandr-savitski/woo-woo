import { APP_CONFIG } from 'src/config';
import { WpPage } from 'src/types/wordpress';

export const getWpPage = async (slug: string): Promise<WpPage> => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/page/${slug}`);

  const { data } = await res.json();

  return data;
};
