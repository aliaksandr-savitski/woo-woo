import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import Navbar from 'src/app/components/layout/Navbar';

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
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black selection:bg-teal-300 dark:bg-black dark:text-white dark:selection:bg-fuchsia-600 dark:selection:text-white">
        <header className="bg-white">
          {/* @ts-expect-error Server Component */}
          <Navbar />
        </header>
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
