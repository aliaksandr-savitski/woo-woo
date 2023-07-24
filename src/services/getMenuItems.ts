import { APP_CONFIG } from 'src/config';
import { WpMenuItem } from 'src/types/wordpress';

export const getMenuItems = async (menuId: string): Promise<WpMenuItem[]> => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/menu/${menuId}`);
  const { data } = await res.json();

  return data;
};
