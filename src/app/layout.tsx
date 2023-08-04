import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import Navbar from 'src/components/layout/Navbar';
import Footer from 'src/components/layout/Footer';
import { generateNavbarMenu } from 'src/components/layout/Navbar/utils/generateNavbarMenu';
import { getMenuItems } from 'src/services/getMenuItems';
import { APP_CONFIG } from 'src/config';

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
  weight: ['300', '400', '500', '600', '700'],
  variable: '--inter-var'
});

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const wpHeaderMenu = await getMenuItems(process.env.WP_HEADER_MENU_ID as string);

  const headerMenu = generateNavbarMenu(wpHeaderMenu);

  return (
    <html lang={APP_CONFIG.lang} className={inter.variable}>
      <body className="selection:bg-blue-300 bg-white font-sans text-black antialiased">
        <div className="bg-white">
          <header className="relative border-b border-gray-200 bg-white">
            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center">
                <Suspense>
                  {/* @ts-expect-error Server Component */}
                  <Navbar menu={headerMenu} />
                </Suspense>
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
};

export default RootLayout;
