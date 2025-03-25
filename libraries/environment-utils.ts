import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    TURNSTILE_SECRET_KEY: z.string(),
    SECRET_CLIENT_COOKIE_VAR: z.string(),
    BETTER_AUTH_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
  },
  clientPrefix: 'PUBLIC_',
  client: {
    PUBLIC_TURNSTILE_SITE_KEY: z.any(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});

export type ENVSchema = typeof env;
