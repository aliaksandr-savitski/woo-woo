import { dehydrate } from '@tanstack/query-core';
import { useQuery } from '@tanstack/react-query';

import { APP_CONFIG } from 'src/config';
import { ExtractFnReturnType, QueryConfig } from 'src/lib/react-query';
import getQueryClient from 'src/utils/getQueryClient';

const QUERY_KEY = 'hydrate-products';

export const getProducts = async () => {
  const res = await fetch(`${APP_CONFIG.apiUrl}/products`);
  const { data } = await res.json();

  return data;
};

export const getProductsDehydratedState = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: [QUERY_KEY], queryFn: getProducts });

  return dehydrate(queryClient);
};

type QueryFnType = typeof getProducts;

type UseProductsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useProducts = ({ config }: UseProductsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: [QUERY_KEY],
    queryFn: () => getProducts()
  });
};
