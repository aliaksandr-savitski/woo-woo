'use client';

import { HydrateProps, HydrationBoundary } from '@tanstack/react-query';

function Hydrate(props: HydrateProps) {
  return <HydrationBoundary {...props} />;
}

export default Hydrate;
