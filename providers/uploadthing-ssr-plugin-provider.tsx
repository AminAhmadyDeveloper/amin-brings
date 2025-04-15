import { extractRouterConfig } from 'uploadthing/server';

import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';

import { connection } from 'next/server';

import { ourFileRouter } from '@/app/api/uploadthing/core';

export const UploadthingSsPluginProvider = async () => {
  await connection();

  return <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />;
};
