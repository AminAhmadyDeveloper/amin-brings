import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'Salonam',
    short_name: 'Salonam',
    description: 'CRM and reminder app for your business',
    id: 'aminahmady.salonam.app',
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
    theme_color: '#df2d50',
    background_color: '#df2d50',
    start_url: '/dashboard',
    display: 'standalone',
    orientation: 'portrait',
    display_override: ['window-controls-overlay'],
    dir: 'rtl',
    scope: '/',
    lang: 'fa',
    shortcuts: [
      {
        name: 'مشتری جدید',
        url: '/dashboard/new-customer',
        description: 'مشتری جدید',
      },
      {
        name: 'نوبت جدید',
        url: '/dashboard/new-reservation',
        description: 'نوبت جدید',
      },
    ],
    categories: ['business', 'utilities'],
  };
};

export default manifest;
