const baseUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
    ? `http://${process.env.VERCEL_URL}:${process.env.NEXT_PUBLIC_PORT}`
    : `https://${process.env.VERCEL_URL}`;

export const APP_CONFIG = {
  baseUrl,
  apiUrl: `${baseUrl}/api`,
  lang: 'en',
  company: {
    name: 'Test Company',
    imageUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  }
};
