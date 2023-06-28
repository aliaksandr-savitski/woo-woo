import Link from 'next/link';

interface Props {
  id: number;
  slug: string;
  name: string;
}

const NavbarItem = ({ slug, name }: Props) => (
  <Link href={`/category/${slug}`} className="text-sm font-semibold leading-6 text-gray-900">
    {name}
  </Link>
);

export default NavbarItem;
