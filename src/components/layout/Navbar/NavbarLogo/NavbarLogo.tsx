import Link from 'next/link';

interface Props {
  companyName: string;
  imageUrl?: string;
}

const NavbarLogo = ({ companyName, imageUrl }: Props) => (
  <Link href="/">
    <span className="sr-only">{companyName}</span>
    <img className="h-8 w-auto" src={imageUrl} alt={`${companyName} logo`} />
  </Link>
);

export default NavbarLogo;
