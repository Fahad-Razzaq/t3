import { env } from '@/env.mjs';

export const siteConfig = {
  name: env.WEBSITE_NAME,
  description: env.WEBSITE_DESCRIPTION,
  siteUrl: env.NEXT_PUBLIC_APP_URL,
  keywords: ['Wordpress', 'Web Development', 'Ecommerce'],

  creator: 'Creator Name',

  author: {
    name: `Author Name`,
    twitter: ``,
  },

  social: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  },

  icons: [
    { rel: 'icon', url: '/icon-192x192.png' },
    { rel: 'icon', url: '/icon-256x256.png' },
    { rel: 'icon', url: '/icon-384x384.png' },
    { rel: 'icon', url: '/icon-512x512.png' },
  ],

  manifest: 'manifest.webmanifest',
};

export type SiteConfig = typeof siteConfig;
