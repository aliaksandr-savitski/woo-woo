import Link from 'next/link';

export type BreadCrumb = {
  id: number;
  name: string;
  slug: string;
  href: string;
};

interface Props {
  items: BreadCrumb[];
}

const BreadCrumbs = ({ items }: Props) => (
  <nav aria-label="Breadcrumb">
    <ol
      role="list"
      className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      {items.map(({ id, name, href }, index) =>
        index !== items.length - 1 ? (
          <li key={id}>
            <div className="flex items-center">
              <Link href={`/category/${href}`} className="mr-2 text-sm font-medium text-gray-900">
                {name}
              </Link>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
        ) : (
          <li className="text-sm" key={id}>
            <Link
              href={`/category/${href}`}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              Basic Tee 6-Pack
            </Link>
          </li>
        )
      )}
    </ol>
  </nav>
);

export default BreadCrumbs;
