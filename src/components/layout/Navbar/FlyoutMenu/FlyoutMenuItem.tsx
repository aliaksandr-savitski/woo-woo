import Link from 'next/link';

import { NavigationSectionItem } from 'src/types/navigation';

interface Props {
  item: NavigationSectionItem;
}

const FlyoutMenuItem = ({ item }: Props) => (
  <li className="flex">
    <Link href={item.href} className="hover:text-gray-800">
      {item.name}
    </Link>
  </li>
);

export default FlyoutMenuItem;
