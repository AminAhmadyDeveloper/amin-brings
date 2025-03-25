import { toNextJsHandler } from 'better-auth/next-js';

import { auth } from '@/libraries/auth-api';

export const config = { api: { bodyParser: false } };

export const { POST, GET } = toNextJsHandler(auth);
