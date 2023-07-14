'use client';

import { NavigationCategory, FeaturedCategory, NavigationSection } from 'src/types/navigation';
import clsx from 'clsx';
import FlyoutMenuItem from './FlyoutMenuItem';

const featured = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
  },
  {
    name: 'Basic Tees',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
  }
];

interface Props {
  featured: FeaturedCategory[];
  sections: NavigationSection[];
}

const FlyoutMenu = ({ featured, sections }: Props) => (
  <>
    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

    <div className="relative z-40 bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
          <div className="col-start-2 grid grid-cols-2 gap-x-8">
            {featured.length > 0
              ? featured.map((item) => (
                  <div key={item.name} className="group relative text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      {/* <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="object-cover object-center"
                  /> */}
                    </div>
                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                      {item.name}
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                ))
              : null}
          </div>
          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
            {sections.map((section) => (
              <div key={section.name}>
                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                  {section.name}
                </p>
                <ul
                  role="list"
                  aria-labelledby={`${section.name}-heading`}
                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                >
                  {section.items?.map((item) => (
                    <FlyoutMenuItem key={item.href} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default FlyoutMenu;
