'use client';

import { useState } from 'react';
// import Cart from 'components/cart';
import { Navigation } from 'src/types/navigation';

import { Popover } from '@headlessui/react';
import { NavItemWithFlyout, NavbarItem } from './NavbarItem';
import NavbarLogo from './NavbarLogo';
import MobileMenu from './MobileMenu';
import MobileMenuToggler from './MobileMenu/MobileMenuToggler';

interface Props {
  menu: Navigation;
}

const Navbar = async ({ menu }: Props) => {
  const [open, setOpen] = useState(false);

  const data = {
    company: {
      name: 'Test Company',
      imageUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
    }
  };

  return (
    <>
      <MobileMenuToggler setOpen={setOpen} />
      <MobileMenu isOpen={open} setOpen={setOpen} navigation={menu} />

      <div className="ml-4 flex lg:ml-0">
        <NavbarLogo imageUrl={data.company.imageUrl} companyName={data.company.name} />
      </div>

      {/* Flyout menus */}
      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
        <div className="flex h-full space-x-8">
          {menu.categories.map((category) => (
            <NavItemWithFlyout key={category.id} item={category} />
          ))}
          {menu.pages.map((page) => (
            <NavbarItem key={page.name} item={page} />
          ))}
        </div>
      </Popover.Group>
    </>
  );
};

export default Navbar;
