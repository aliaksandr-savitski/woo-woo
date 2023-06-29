'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useDetectClickOutside } from 'react-detect-click-outside';

import { MenuItem } from 'src/types';
import FlyoutMenu from '../FlyoutMenu';

interface Props {
  item: MenuItem;
}

const NavItemWithFlyout = ({ item }: Props) => {
  const [isFlyoutOpen, setFlyoutOpen] = useState(false);
  const pathname = usePathname();

  const toggleFlyout = () => {
    setFlyoutOpen((prevState) => !prevState);
  };

  const closeFlyout = () => {
    setFlyoutOpen(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeFlyout });

  useEffect(() => {
    closeFlyout();
  }, [pathname]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleFlyout}
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded={isFlyoutOpen}
      >
        {item.name}
        <svg
          className="h-5 w-5 flex-none text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <span ref={ref}>
        <FlyoutMenu isOpen={isFlyoutOpen} items={item.subcategories as Required<MenuItem>[]} />
      </span>
    </div>
  );
};

export default NavItemWithFlyout;
