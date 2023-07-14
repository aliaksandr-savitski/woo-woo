import WooCommerceRestApi, { WooCommerceRestApiVersion } from '@woocommerce/woocommerce-rest-api';

const {
  WOOCOMMERCE_API_URL,
  WOOCOMMERCE_API_VERSION,
  WOOCOMMERCE_API_CONSUMER_KEY,
  WOOCOMMERCE_API_SECRET
} = process.env;

export const wooCommerceApiClient = new WooCommerceRestApi({
  url: WOOCOMMERCE_API_URL as string,
  consumerKey: WOOCOMMERCE_API_CONSUMER_KEY as string,
  consumerSecret: WOOCOMMERCE_API_SECRET as string,
  version: WOOCOMMERCE_API_VERSION as WooCommerceRestApiVersion
});
