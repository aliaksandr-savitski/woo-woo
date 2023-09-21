import { Product } from 'src/types';
import CategoryListItem from './CategoryListItem';

const CategoryList = ({ products }: { products: Product[] }) => (
  <div className="grid grid-flow-row auto-rows-max gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
    {products.map((product) => (
      <CategoryListItem key={product.id} product={product} />
    ))}
  </div>
);

export default CategoryList;
