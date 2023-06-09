const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
    ? `http://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}`
    : `https://${process.env.NEXT_PUBLIC_HOST}`;

export const APP_CONFIG = {
  baseUrl,
  apiUrl: `${baseUrl}/api`
};
