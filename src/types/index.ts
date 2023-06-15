import { Category } from 'src/lib/woocommerce/WCTypes';

export type User = {
  id: number;
  name: string;
  email: string;
};

export type MenuItem = Pick<Category, 'id' | 'name' | 'slug' | 'image'> & {
  href: string;
  subcategories?: MenuItem[];
};
