import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { captcha, phoneNumber } from 'better-auth/plugins';

import { env } from '@/libraries/environment-utils';
import { database } from '@/server/database';
import * as schema from '@/server/database/schema';

export const auth = betterAuth({
  database: drizzleAdapter(database, {
    provider: 'pg',
    schema: schema,
  }),
  emailAndPassword: {
    enabled: false,
  },
  plugins: [
    phoneNumber({
      sendOTP: ({ phoneNumber, code }) => {
        console.log({ phoneNumber, code });
      },
      signUpOnVerification: {
        getTempEmail: (phoneNumber) => `${phoneNumber}@temp.com`,
        getTempName: (phoneNumber) => phoneNumber,
      },
    }),
    captcha({
      provider: 'cloudflare-turnstile',
      secretKey: env.TURNSTILE_SECRET_KEY,
    }),
  ],
});
