import { ReactNode, Suspense } from 'react';

const BasicPageLayout = ({ children }: { children: ReactNode }) => (
  <div className=" mx-auto max-w-7xl items-center justify-between px-6 pb-16 lg:px-8 lg:pb-24">
    <Suspense>
      <article>{children}</article>
    </Suspense>
  </div>
);

export default BasicPageLayout;
