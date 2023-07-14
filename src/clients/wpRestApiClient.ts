import HttpClient from './HttpClient';

class WpRestApiClient extends HttpClient {
  constructor() {
    const auth = {
      username: process.env.WP_REST_API_LOGIN as string,
      password: process.env.WP_REST_API_PASSWORD as string
    };

    if (!process.env.WP_REST_API_URL) {
      throw new Error(
        'Wordpress API URL missing, check environment variables or make sure you run request on server.'
      );
    }

    const apiUrl = `${process.env.WP_REST_API_URL}/wp-json/wp/v2`;

    super(apiUrl, { auth });
  }
}

export default new WpRestApiClient();
