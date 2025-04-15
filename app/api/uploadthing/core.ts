import { UploadThingError } from 'uploadthing/server';

import { type FileRouter, createUploadthing } from 'uploadthing/next';

import { auth } from '@/libraries/auth-api';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const session = await auth.api.getSession({ headers: req.headers });
      if (!session?.user) throw new UploadThingError('Unauthorized');
      return { session };
    })
    .onUploadComplete(async ({ metadata }) => {
      return { uploadedBy: metadata.session.user.id };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
