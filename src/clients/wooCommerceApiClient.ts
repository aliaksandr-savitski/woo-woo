import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const {
  WOOCOMMERCE_API_URL,
  WOOCOMMERCE_API_VERSION,
  WOOCOMMERCE_API_CONSUMER_KEY,
  WOOCOMMERCE_API_SECRET
} = process.env;

export const wooCommerceApiClient = new WooCommerceRestApi({
  url: WOOCOMMERCE_API_URL,
  consumerKey: WOOCOMMERCE_API_CONSUMER_KEY,
  consumerSecret: WOOCOMMERCE_API_SECRET,
  version: WOOCOMMERCE_API_VERSION
});
