import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'Amin Brings',
    short_name: 'Amin Brings',
    description:
      'Open Source Next.js Boilerplate with trpc, tailwindcss, better-auth',
    id: 'aminahmady.brings.app',
    launch_handler: {
      client_mode: ['navigate-existing', 'auto'],
    },
    screenshots: [
      {
        src: 'screenshot.png',
        sizes: '1280x720',
        type: 'image/png',
        platform: 'android',
      },
      {
        src: 'screenshot.png',
        sizes: '1280x720',
        type: 'image/png',
        platform: 'ios',
      },
    ],
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#000000',
    background_color: '#000000',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    display_override: ['window-controls-overlay'],
    dir: 'rtl',
    scope: '/',
    lang: 'fa',
    shortcuts: [
      {
        name: 'Home',
        url: '/',
        description: 'Home Page',
      },
    ],
    categories: ['business', 'utilities'],
  };
};

export default manifest;
