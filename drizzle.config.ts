import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

import { env } from '@/libraries/environment-utils';

export default defineConfig({
  out: 'server/database/migrations',
  schema: 'server/database/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL ?? '',
  },
});
