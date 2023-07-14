import Link from 'next/link';
import { NavigationPage } from 'src/types/navigation';

interface Props {
  item: NavigationPage;
}

const NavbarItem = ({ item }: Props) => (
  <Link
    href={item.href}
    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
  >
    {item.name}
  </Link>
);

export default NavbarItem;
