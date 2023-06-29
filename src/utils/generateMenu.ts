import { Category } from 'src/lib/woocommerce/types';
import { MenuItem } from 'src/types';

const UNCATEGORIZED_CATEGORY_SLUG = 'uncategorized';

const generateHref = (categories: Category[], parent: Number = 0, hrefBase: string) => {
  const parentCategory = categories.find((item) => item.id === parent);

  let href = `${parentCategory ? parentCategory.slug : '/category'}/${hrefBase}`;

  // START RECURSION
  if (parentCategory && parent !== 0) {
    href = generateHref(categories, parentCategory?.parent, href);
  }

  return href;
};

export const generateMenu = (categories: Category[], parent: Number = 0): MenuItem[] | [] => {
  const filteredCategories = categories.filter(
    (category) => category.parent === parent && category.slug !== UNCATEGORIZED_CATEGORY_SLUG
  );

  if (filteredCategories.length === 0) {
    return [];
  }

  return filteredCategories.map(({ id, name, slug, image, parent }) => {
    const subcategories = generateMenu(categories, id);
    const href = generateHref(categories, parent, slug);

    return {
      id,
      name,
      slug,
      image,
      href,
      subcategories: subcategories.length > 0 ? subcategories : undefined
    };
  });
};
