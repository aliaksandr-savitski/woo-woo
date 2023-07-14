# Next.js WooCommerce

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

### Add Shopify domain to an environment variable

Create a `SHOPIFY_STORE_DOMAIN` environment variable and use your Shopify domain as the the value (ie. `SHOPIFY_STORE_SUBDOMAIN.myshopify.com`).

> Note: Do not include the `https://`.

### Accessing the Shopify Storefront API

Next.js Commerce utilizes [Shopify's Storefront API](https://shopify.dev/docs/api/storefront) to create unique customer experiences. The API offers a full range of commerce options making it possible for customers to control products, collections, menus, pages, cart, checkout, and more.

In order to use the Shopify's Storefront API, you need to install the [Headless app](https://apps.shopify.com/headless) in your Shopify store.

Once installed, you'll need to create a `SHOPIFY_STOREFRONT_ACCESS_TOKEN` environment variable and use the public access token as the value

> Note: Shopify does offer a Node.js Storefront API SDK. We use the Storefront API via GraphQL directly instead of the Node.js SDK so we have more control over fetching and caching.

<details>
  <summary>Expand to view detailed walkthrough</summary>

1. Navigate to `https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/settings/apps`.
1. Click the green `Shopify App Store` button.
   ![Shopify App Store](https://user-images.githubusercontent.com/446260/233220545-cb4c1461-ebc5-424e-a421-bf0d32044027.jpg)
1. Search for `Headless` and click on the `Headless` app.
   ![Headless](https://user-images.githubusercontent.com/446260/233220547-6d93b5ef-16c7-45db-99e7-13ae7e18eb39.jpg)
1. Click the black `Add app` button.
   ![Add app](https://user-images.githubusercontent.com/446260/233220550-a34c8bda-75a8-437a-9673-125f3794ff35.jpg)
1. Click the green `Add sales channel` button.
   ![Add sales channel](https://user-images.githubusercontent.com/446260/233220553-42d94a74-421d-4f8a-99ab-a95936b707a3.jpg)
1. Click the green `Create storefront` button.
   ![Create storefront](https://user-images.githubusercontent.com/446260/233220556-1eee15c4-a45d-446e-9f73-2e7c9f56b29c.jpg)
1. Copy and paste the public access token and assign it to a `SHOPIFY_STOREFRONT_ACCESS_TOKEN` environment variable.
   ![Pubic access token](https://user-images.githubusercontent.com/446260/233220558-5db04ff9-b894-40fe-bfba-0e92f26b8e1f.jpg)
1. If you ever need to reference the public access token again, you can navigate to `https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/headless_storefronts`.
</details>

### Plugins that are used

[Advanced Custom Fields (ACF)](https://wordpress.org/plugins/advanced-custom-fields/) - this plugin is needed to customize your menu and configure it in a way that theme works appropriately and can map menu items.

### Branding & Design

Since you're creating a headless Shopify store, you'll be in full control of your brand and design. However, there are still a few aspects we're leaving within Shopify's control.

- Checkout
- Emails
- Order status
- Order history
- Favicon (for any Shopify controlled pages)

You can use Shopify's admin to customize these pages to match your brand and design.

<details>
  <summary>Expand to view detailed walkthrough</summary>

#### Checkout, order status, and order history

1. Navigate to `https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/settings/checkout`.
1. Click the green `Customize` button.
   ![Customize](https://user-images.githubusercontent.com/446260/233220530-9beda4b4-5008-440a-b923-9d196b722539.jpg)
1. Click `Branding` (ie. the paintbrush icon) and customize your brand. Please note, there are three steps / pages to the checkout flow. Use the dropdown to change pages and adjust branding as needed on each page. Click `Save` when you are done.
   ![Branding](https://user-images.githubusercontent.com/446260/233220534-e884d9fd-1a39-4f4d-9d09-163dde47c2e8.jpg)
1. Navigate to `https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/settings/branding`.
1. Customize settings to match your brand.
   ![Branding](https://user-images.githubusercontent.com/446260/233220536-452b8802-9a1e-40f0-9a12-52b3dace84a5.jpg)

#### Emails

1. Navigate to `https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/settings/email_settings`.
1. Customize settings to match your brand.
   ![Branding](https://user-images.githubusercontent.com/446260/233220538-13c83a9e-55f8-41e6-9b34-a39ee0848a8a.jpg)

#### Favicon

1. Navigate to `https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/themes`.
1. Click the green `Customize` button.
   ![Customize theme](https://user-images.githubusercontent.com/446260/233220539-4869a6cd-f59f-4de6-8091-95ed81d2302d.jpg)
1. Click `Theme settings` (ie. the paintbrush icon), expand the `FAVICON` section, upload favicon, then click the `Save` button.
   ![Favicon](https://user-images.githubusercontent.com/446260/233220542-ac81b674-d86e-4172-ab38-c79d1ad1ff36.jpg)

</details>

#### Products

#### Collections

`https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/collections`

#### Pages

#### Navigation menus

`https://SHOPIFY_STORE_SUBDOMAIN.myshopify.com/admin/menus`

Next.js Commerce's header and footer navigation is pre-configured to be controlled by WordPress menus. This means you have full control over what links go here. They can be to collections, pages, external links, and more.

Create the following navigation menus:

- `Next.js Frontend Header Menu` -- Menu items to be shown in the headless frontend header.
- `Next.js Frontend Footer Menu` -- Menu items to be shown in the headless frontend footer.

![Shopify navigation menus](https://user-images.githubusercontent.com/446260/233220571-33f9d5a8-1206-4ab4-ad79-83b4ca954331.jpg)

![Shopify navigation menu detail](https://user-images.githubusercontent.com/446260/233220573-5f03a51f-4100-461f-a696-f085856e391b.jpg)

#### SEO
