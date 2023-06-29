import Link from 'next/link';

import { MenuItem } from 'src/types';

interface Props {
  item: MenuItem;
}

const FlyoutMenuItem = ({ item }: Props) => (
  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
      <svg
        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
        />
      </svg>
    </div>
    <div className="flex-auto">
      <Link href={item.href} className="block font-semibold text-gray-900">
        {item.name}
        <span className="absolute inset-0"></span>
      </Link>
      {/* <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p> */}
    </div>
  </div>
);

export default FlyoutMenuItem;
