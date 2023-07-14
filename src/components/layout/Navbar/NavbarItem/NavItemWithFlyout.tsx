'use client';

import { Fragment } from 'react';
import clsx from 'clsx';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { NavigationCategory } from 'src/types/navigation';
import FlyoutMenu from '../FlyoutMenu';

interface Props {
  item: NavigationCategory;
}

const NavItemWithFlyout = ({ item }: Props) => (
  <Popover className="flex">
    {({ open }) => (
      <>
        <div className="relative flex">
          <Popover.Button
            className={clsx(
              open
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-gray-700 hover:text-gray-800',
              'relative z-10 -mb-px flex items-center gap-x-1 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
            )}
          >
            {item.name}
            <ChevronDownIcon
              className={clsx(
                open ? 'rotate-180 text-indigo-600' : 'rotate-0 text-gray-400',
                'h-4 w-4 flex-none transition-colors'
              )}
            />
          </Popover.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
            <FlyoutMenu sections={item.sections} featured={item.featured} />
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

export default NavItemWithFlyout;
