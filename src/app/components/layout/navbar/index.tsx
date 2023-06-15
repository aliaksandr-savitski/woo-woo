// import Cart from 'components/cart';

import { getProductsCategories } from 'src/app/products/api/getProductsCategories';
import { generateMenu } from './utils/generateMenu';
import { NavItemWithFlyout, NavbarItem } from './components/NavbarItem';
import NavbarLogo from './components/NavbarLogo';
import MobileMenu from './components/MobileMenu';
import MobileMenuOpenButton from './components/MobileMenu/MobileMenuOpenButton';
import { MobileMenuProvider } from './components/MobileMenu/MobileMenuProvider';

export const runtime = 'edge';

const Navbar = async () => {
  const categories = await getProductsCategories();
  const menu = generateMenu(categories);

  const data = {
    company: {
      name: 'Test Company',
      imageUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
    }
  };

  return (
    <MobileMenuProvider>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavbarLogo imageUrl={data.company.imageUrl} companyName={data.company.name} />
        </div>
        <div className="flex lg:hidden">
          <MobileMenuOpenButton />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {menu.map((menuItem) =>
            menuItem.subcategories ? (
              <NavItemWithFlyout key={menuItem.id} item={menuItem} />
            ) : (
              <NavbarItem id={menuItem.id} slug={menuItem.slug} name={menuItem.slug} />
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <MobileMenu menuItems={menu} />
    </MobileMenuProvider>
  );
};

export default Navbar;
