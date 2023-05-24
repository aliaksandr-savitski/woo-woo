const baseUrl =
  process.env.VERCEL_ENV === 'development'
    ? `http://${process.env.HOST}:${process.env.PORT}`
    : `https://${process.env.HOST}`;

export const APP_CONFIG = {
  baseUrl,
  apiUrl: `${baseUrl}/api`
};
