export const runtime = 'edge';

interface Props {
  children: React.ReactNode;
}

const PageHeader = ({ children }: Props) => (
  <header className="mx-auto flex max-w-7xl items-center justify-between py-24 lg:px-8">
    <h1 className="w-full text-center text-4xl font-bold">{children}</h1>
  </header>
);

export default PageHeader;
