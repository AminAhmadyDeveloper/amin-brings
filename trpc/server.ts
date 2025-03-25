import { TRPCError, initTRPC } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import Superjson from 'superjson';
import { ZodError } from 'zod';

import { auth } from '@/libraries/auth-api';
import { database } from '@/server/database';

export const createTRPCContext = async (
  options?: FetchCreateContextFnOptions,
) => {
  if (options?.req.headers) {
    const response = await auth.api.getSession({
      headers: options?.req.headers,
    });

    return {
      session: response?.session,
      user: response?.user,
      database,
      headers: options?.resHeaders,
      request: options?.req,
    };
  }

  return {
    database,
    headers: options?.resHeaders,
    request: options?.req,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: Superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const router = t.router;

export const publicProcedure = t.procedure;

export const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      session: { ...ctx.session },
      user: { ...ctx.user },
    },
  });
});

export const createCallerFactory = t.createCallerFactory;
export const middleware = t.middleware;

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;
export type ProtectedTRPCContext = TRPCContext & {
  user: NonNullable<TRPCContext['user']>;
  session: NonNullable<TRPCContext['session']>;
};
