import { useQuery } from '@tanstack/react-query';

import { APP_CONFIG } from 'src/config';
import { ExtractFnReturnType, QueryConfig } from 'src/lib/react-query';

export const getProducts = async () => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products`);

  return res.json();
};

type QueryFnType = typeof getProducts;

type UseProductsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useProducts = ({ config }: UseProductsOptions = {}) => {
  {
    /* @ts-expect-error Server Component */
  }
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['products'],
    queryFn: () => getProducts()
  });
};
