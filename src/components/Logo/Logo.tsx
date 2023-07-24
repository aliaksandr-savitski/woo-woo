import Link from 'next/link';
import clsx from 'clsx';
import { APP_CONFIG } from 'src/config';

const { name, imageUrl } = APP_CONFIG.company;

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <Link href="/" className={clsx(className, 'block')}>
    <span className="sr-only">{name}</span>
    <img className="h-8 w-auto" src={imageUrl} alt={`${name} logo`} />
  </Link>
);

export default Logo;
