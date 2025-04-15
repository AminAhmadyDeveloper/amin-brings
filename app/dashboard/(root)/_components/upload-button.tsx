'use client';

import React from 'react';

import { UploadButton as UploadButtonPrimitive } from '@/components/utils/uploadthing';

export const UploadButton = () => {
  return <UploadButtonPrimitive endpoint="imageUploader" />;
};
