import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import Navbar from 'src/app/components/layout/Navbar';
import Footer from 'src/app/components/layout/Footer';

import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;

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
  return (
    <html lang="pl" className={inter.variable}>
      <body className="bg-white text-black selection:bg-teal-300">
        <header className="bg-white">
          <Suspense>
            {/* @ts-expect-error Server Component */}
            <Navbar />
          </Suspense>
        </header>

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
