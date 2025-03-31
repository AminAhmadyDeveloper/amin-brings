import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Amin Brings – Open Source Next.js Boilerplate with trpc, tailwindcss, better-auth',
  description:
    'Amin Brings is an open-source Next.js boilerplate with best practices for performance, scalability, and developer experience.',
  keywords: [
    'Amin Brings',
    'Next.js boilerplate',
    'open source',
    'web development',
    'developer tools',
  ],
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/icon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icon.ong',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon.png',
    },
  ],
  openGraph: {
    title:
      'Amin Brings – Open Source Next.js Boilerplate with trpc, tailwindcss, better-auth',
    description:
      'Kickstart your Next.js project with Amin Brings, a modern, open-source boilerplate optimized for scalability and best practices.',
    url: 'https://github.com/AminAhmadyDeveloper/amin-brings',
    siteName: 'Amin Brings',
    images: [
      {
        url: 'https://github.com/AminAhmadyDeveloper/amin-brings/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amin Brings – Open Source Next.js Boilerplate with trpc, tailwindcss, better-auth',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Amin Brings – Open Source Next.js Boilerplate with trpc, tailwindcss, better-auth',
    description:
      'Kickstart your Next.js project with Amin Brings, a modern, open-source boilerplate optimized for scalability and best practices.',
    images: ['https://github.com/AminAhmadyDeveloper/amin-brings/og-image.png'],
  },
  metadataBase: new URL('https://github.com/AminAhmadyDeveloper/amin-brings'),
  authors: [
    {
      name: 'Amin Ahmady',
      url: 'https://github.com/AminAhmadyDeveloper',
    },
  ],
  creator: 'Amin Ahmady',
  publisher: 'Amin Ahmady',
  applicationName: 'Amin Brings',
};
