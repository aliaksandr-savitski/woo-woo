'use client';

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useMobileMenu } from './MobileMenuProvider';

const MobileMenuToggler = () => {
  const { openMenu } = useMobileMenu();

  return (
    <button
      type="button"
      className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
      onClick={openMenu}
    >
      <span className="sr-only">Open menu</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default MobileMenuToggler;
