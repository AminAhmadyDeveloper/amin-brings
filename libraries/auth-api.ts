import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { phoneNumber } from 'better-auth/plugins';

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
  ],
});
