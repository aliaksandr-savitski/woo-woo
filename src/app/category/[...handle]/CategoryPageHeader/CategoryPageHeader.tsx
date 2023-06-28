interface Props {
  title: string;
}

const CategoryPageHeader = ({ title }: Props) => (
  <div className="mx-auto flex max-w-7xl items-center justify-between py-24 lg:px-8">
    <h1 className="w-full text-center text-4xl font-bold">{title}</h1>
  </div>
);

export default CategoryPageHeader;
