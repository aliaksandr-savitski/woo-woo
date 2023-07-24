export interface Image {
  src: string;
  alt: string;
}

export interface FeaturedCategory {
  name: string;
  href: string;
  image: Image;
}

export interface NavigationSectionItem {
  name: string;
  href: string;
}

export interface NavigationSection {
  id: string | number;
  name: string;
  items: NavigationSectionItem[];
}

export interface NavigationCategory {
  id: string | number;
  name: string;
  href: string;
  featured: FeaturedCategory[];
  sections: NavigationSection[];
}

export interface NavigationPage {
  name: string;
  href: string;
}

export interface Navigation {
  categories: NavigationCategory[];
  pages: NavigationPage[];
}

export interface FooterMenuSectionItem {
  name: string;
  id: string | number;
  href: string;
}

export interface FooterMenuSection {
  name: string;
  id: string | number;
  items: FooterMenuSectionItem[];
}
