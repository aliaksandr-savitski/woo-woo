import Link from 'next/link';
import { APP_CONFIG } from 'src/config';

const { name, imageUrl } = APP_CONFIG.company;

const Logo = () => (
  <Link href="/">
    <span className="sr-only">{name}</span>
    <img className="h-8 w-auto" src={imageUrl} alt={`${name} logo`} />
  </Link>
);

export default Logo;
