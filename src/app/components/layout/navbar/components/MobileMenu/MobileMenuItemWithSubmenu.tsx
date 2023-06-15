import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { MenuItem } from 'src/types';
import { useMobileMenu } from './MobileMenuProvider';

interface MobileMenuItemWithSubmenuProps {
  item: Required<MenuItem>;
}

const MobileMenuLinkRenderer = ({
  item,
  level = 0
}: MobileMenuItemWithSubmenuProps & { level: Number }) => {
  const { closeMenu } = useMobileMenu();

  return item.subcategories?.length ? (
    <div>
      <Link
        key={item.id}
        href={item.href}
        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        onClick={closeMenu}
      >
        {item.name}
      </Link>

      {/*
       * Render submenu
       */}
      {item.subcategories.map((subcategory) => (
        <MobileMenuLinkRenderer
          key={subcategory.id}
          item={subcategory as Required<MenuItem>}
          level={+level + 1}
        />
      ))}
    </div>
  ) : (
    <Link
      key={item.id}
      href={item.href}
      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
      onClick={closeMenu}
    >
      {item.name}
    </Link>
  );
};

const MobileMenuItemWithSubmenu = ({ item }: MobileMenuItemWithSubmenuProps) => {
  const [isOpen, setOpen] = useState(false);
  const { closeMenu } = useMobileMenu();

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="-mx-3">
      <div className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
        <Link href={item.href} className="flex grow items-center" onClick={closeMenu}>
          {item.name}
        </Link>
        <button
          type="button"
          className="flex grow-0 items-center justify-between"
          aria-controls="disclosure-1"
          aria-expanded="false"
          onClick={toggle}
        >
          <motion.svg
            className="h-5 w-5 flex-none"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-thidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </motion.svg>
        </button>
      </div>

      {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
      <AnimatePresence initial={true}>
        {isOpen && (
          <motion.div
            key="content"
            className="mt-2 space-y-2"
            id="disclosure-1"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {item.subcategories.map((subcategory) => (
              <MobileMenuLinkRenderer
                key={subcategory.id}
                item={subcategory as Required<MenuItem>}
                level={0}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenuItemWithSubmenu;
