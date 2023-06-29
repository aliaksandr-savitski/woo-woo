import Link from 'next/link';

interface Props {
  companyName: string;
  imageUrl?: string;
}

const NavbarLogo = ({ companyName, imageUrl }: Props) => (
  <Link href="/" className="-m-1.5 p-1.5">
    <span className="sr-only">{companyName}</span>
    <img className="h-8 w-auto" src={imageUrl} alt={`${companyName} logo image`} />
  </Link>
);

export default NavbarLogo;
