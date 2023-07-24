import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getWpPage } from 'src/services/getWpPageService';
import Prose from 'src/components/Prose';
import PageHeader from './PageHeader';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await getWpPage(params.slug);

  if (!page) {
    return notFound();
  }

  if (!page) return notFound();

  const hide = process.env.VERCEL_ENV !== 'production';

  return {
    title: page.title.rendered,
    description: page.excerpt.rendered,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    }
  };
}

const StandardPage = async ({ params }: { params: { slug: string } }) => {
  const page = await getWpPage(params.slug);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <PageHeader>{page.title.rendered}</PageHeader>
      <Prose html={page.content.rendered} />
    </>
  );
};

export default StandardPage;
