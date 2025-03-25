import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from '@/server/database/schema';

const sql = neon(process.env.DATABASE_URL!);
export const database = drizzle({ client: sql, schema });
