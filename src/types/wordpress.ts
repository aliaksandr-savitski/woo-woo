export interface WpMenuItem {
  id: number;
  title: {
    rendered: string;
  };
  status: string;
  url: string;
  attr_title: string;
  description: string;
  type: string;
  type_label: string;
  object: string;
  object_id: number;
  parent: number;
  menu_order: number;
  target: string;
  classes: string[];
  xfn: string[];
  invalid: boolean;
  meta: any[];
  menus: number;
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
    'wp:term': { taxonomy: string; embeddable: boolean; href: string }[];
    'wp:menu-item-object': { taxonomy: string; embeddable: boolean; href: string }[];
    curies: { name: string; href: string; templated: boolean }[];
  };
}

export interface WpPage {
  id: number;
  date: Date;
  date_gmt: Date;
  modified: Date;
  modified_gmt: Date;
  guid: {
    rendered: string;
  };
  type: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  acf: any[];
  _links: {
    self: { href: string }[];
    collection: { href: string }[];
    about: { href: string }[];
  };
}
