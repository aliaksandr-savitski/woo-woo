import { dehydrate } from '@tanstack/query-core';
import getQueryClient from 'src/utils/getQueryClient';
import Hydrate from 'src/utils/hydrate.client';
import { User } from '../../types';
import ListUsers from './list-users';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = (await res.json()) as User[];
  return users;
}

export default async function Hydation() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hydrate-users'], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
}
