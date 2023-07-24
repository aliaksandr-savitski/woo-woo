import { WpMenuItem } from 'src/types/wordpress';
import { FooterMenuSection } from 'src/types/navigation';

const generateHref = (url: string, id: string | number): string => {
  const categoryUrlRegex = new RegExp(
    `${process.env.WP_BASE_URL}/${process.env.WP_CATEGORY_PAGE_URI}`
  );
  const isCetegoryUrl = categoryUrlRegex.test(url);

  if (isCetegoryUrl) {
    const uri = url.replace(categoryUrlRegex, '');
    return `/category/${id}${uri}`;
  }

  return url.replace(new RegExp(`${process.env.WP_BASE_URL}`), '');
};

const getItemsForCategory = (categoryId: string | number, menuItems: WpMenuItem[]) => {
  const items = menuItems.filter(
    ({ parent, status }) => parent === categoryId && status === 'publish'
  );

  return items.map(({ id, title, url, object_id }) => ({
    id,
    name: title.rendered,
    href: generateHref(url, object_id)
  }));
};

export const generateFooterMenu = (wpMenuItems: WpMenuItem[]): FooterMenuSection[] => {
  return wpMenuItems
    .filter(({ parent, status }) => parent === 0 && status === 'publish')
    .map(({ id, title }) => ({
      id,
      name: title.rendered,
      items: getItemsForCategory(id, wpMenuItems)
    }));
};
