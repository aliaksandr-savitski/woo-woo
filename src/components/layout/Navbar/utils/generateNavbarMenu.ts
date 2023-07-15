import { WPMenuItem } from 'src/types/wordpress';
import { Navigation, NavigationCategory } from 'src/types/navigation';

const generateCategories = (menuItems: WPMenuItem[]) =>
  menuItems
    .filter(({ parent, status, id }) => {
      const isRootItem = parent === 0 && status === 'publish';
      const hasSections = menuItems.find(({ parent: menuItemParentId }) => menuItemParentId === id);

      return isRootItem && hasSections;
    })
    .map(({ id, title, url, object_id }) => ({
      id,
      name: title.rendered,
      href: generateHref(url, object_id),
      featured: [],
      sections: []
    }));

const mapSectionsToCategory = (category: NavigationCategory, menuItems: WPMenuItem[]) => {
  const sections = menuItems
    .filter(({ parent, status }) => parent === category.id && status === 'publish')
    .map((section) => {
      const filteredItems = menuItems.filter(
        ({ parent, status }) => parent === section.id && status === 'publish'
      );

      const items = filteredItems
        ? filteredItems.map(({ object_id, title, url }) => ({
            name: title.rendered,
            href: generateHref(url, object_id)
          }))
        : [];

      return {
        id: section.id,
        name: section.title.rendered,
        items
      };
    });

  category.sections = sections || [];
  category.featured = [];

  return category;
};

const generatePages = (menuItems: WPMenuItem[]) =>
  menuItems
    .filter(({ parent, status, id }) => {
      const isRootItem = parent === 0 && status === 'publish';
      const hasSections = menuItems.find(({ parent: menuItemParentId }) => menuItemParentId === id);

      return isRootItem && !hasSections;
    })
    .map(({ object_id, title, url }) => ({
      name: title.rendered,
      href: generateHref(url, object_id)
    }));

const generateHref = (url: string, id: string | number): string => {
  const regex = new RegExp(`${process.env.WP_BASE_URL}(/[a-z,-]*)`);
  const uri = url.replace(regex, '');
  return `/category/${id}/${uri}`;
};

export const generateNavbarMenu = (wpMenuItems: WPMenuItem[]): Navigation => {
  const categories = generateCategories(wpMenuItems);
  const pages = generatePages(wpMenuItems);

  categories.map((category) => mapSectionsToCategory(category, wpMenuItems));

  return { categories, pages };
};
