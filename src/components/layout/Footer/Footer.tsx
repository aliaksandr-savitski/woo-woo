import Link from 'next/link';

import { getMenuItems } from 'src/services/getMenuItems';
import { generateFooterMenu } from 'src/components/layout/Footer/generateFooterMenu';
import Logo from 'src/components/Logo';

const { SITE_NAME } = process.env;

const Footer = async () => {
  const wpFooterMenu = await getMenuItems(process.env.WP_FOOTER_MENU_ID as string);
  const menu = generateFooterMenu(wpFooterMenu);

  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="mx-auto max-w-2xl px-4 pt-16 text-sm text-gray-600 sm:px-6 sm:pt-8 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Footer</h2>
      {/* LOGO */}
      <div className="block">
        <div className="flex items-center">
          <Logo className="mr-2" />
          <span>{SITE_NAME}</span>
        </div>
        <div className="mt-8 block">
          <p>Making the world a better place through constructing elegant hierarchies.</p>
        </div>
      </div>

      {/* MENU */}
      {menu.length ? (
        <nav className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-3">
          {menu.map((section) => (
            <section key={section.id}>
              <p>
                <strong>{section.name}</strong>
              </p>
              <ul className="mt-2 flex flex-col">
                {section.items.map((item) => (
                  <li key={item.id} className="py-3 md:mt-4 md:py-0">
                    <Link
                      href={item.href}
                      className="text-gray-500 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      ) : null}
      {/* COPYRIGHTS */}
      <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t border-gray-200 pb-10 pt-8 text-sm md:flex-row">
        <p>
          &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
