# Woo Woo - Next.js WooCommerce Template

This is a Next.js 13 template for WooCommerce web store, inspired by [Vercel Commerce](https://github.com/vercel/commerce). It was reworked to change the view of the online shop to be more standart ecommerce website, but keeping most important features as a starting point:

- Next.js App Router
- Optimized for SEO using Next.js's Metadata
- React Server Components (RSCs) and Suspense
- ~~Route Handlers for mutations~~
- Edge runtime
- New fetching and caching paradigms
- Dynamic OG images
- Styling with Tailwind CSS
- ~~Checkout and payments with WooCommerce~~
- ~~Automatic light/dark mode based on system settings~~

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js WooCommerce, a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Shopify store.

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## How to configure your WordPress WooCommerce store for Next.js WooCommerce
