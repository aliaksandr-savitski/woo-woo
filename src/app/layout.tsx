import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import Navbar from 'src/components/layout/Navbar';
import Footer from 'src/components/layout/Footer';
import { generateMenu } from 'src/utils/generateMenu';
import { getMenuItems } from 'src/services/getMenuItems';

import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: !!process.env.IS_RELEASED,
    index: !!process.env.IS_RELEASED
  }
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const menuItems = await getMenuItems(process.env.WP_HEADER_MENU_ID as string);
  const menu = generateMenu(menuItems);

  return (
    <html lang="pl" className={inter.variable}>
      <body className="bg-white text-black selection:bg-teal-300">
        <div className="bg-white">
          <header className="relative bg-white">
            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                  <Suspense>
                    {/* @ts-expect-error Server Component */}
                    <Navbar menu={menu} />
                  </Suspense>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <Suspense>
          <main>{children}</main>
        </Suspense>

        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
