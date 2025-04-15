'use client';

import { UploadDropzone as UploadDropzonePrimitive } from '@/components/utils/uploadthing';

export const UploadDropzone = () => {
  return <UploadDropzonePrimitive endpoint="imageUploader" />;
};
