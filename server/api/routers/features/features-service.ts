import { publicProcedure } from '@/trpc/server';

export const listOfFeatures = publicProcedure.query(() => {
  return [
    {
      name: 'Next.js',
      description: 'The React Framework for Production',
      logo: 'NextJS',
    },
    {
      name: 'React.js',
      description: 'Server and client components.',
      logo: 'React',
    },
    {
      name: 'Shadcn/ui',
      description: 'A set of beautifully-designed, accessible components.',
      logo: 'ShadcnUi',
    },
    {
      name: 'Authentication',
      description:
        'Credential authentication with password reset and email validation',
      logo: 'BetterAuth',
    },
    {
      name: 'Better Auth UI',
      description:
        'Beautiful authentication UI for your app, fully auto generated.',
      logo: 'BetterAuthUi',
    },
    {
      name: 'Database',
      description: 'Drizzle with postgres database',
      logo: 'DrizzleOrm',
    },
    {
      name: 'Uploadthing',
      description:
        'UploadThing is the easiest way to add file uploads to your full stack TypeScript application.',
      logo: 'Uploadthing',
    },
    {
      name: 'Recharts',
      description:
        'A composable charting library built on React components, lightweight and easy to use charts',
      logo: 'Recharts',
    },
    {
      name: 'TypeSafe Backend',
      description: 'Preserve type safety from backend to frontend with tRPC',
      logo: 'TRPC',
    },
    {
      name: 'Tailwindcss',
      description: 'Simple and elegant UI components built with Tailwind CSS',
      logo: 'TailwindCSS',
    },
    {
      name: 'React Query',
      description: 'Always-up-to-date auto-managed queries and mutations.',
      logo: 'ReactQuery',
    },
    {
      name: 'React Hooks Form',
      description:
        'React Hook Form is a tiny library that simplifies form building.',
      logo: 'ReactHookForm',
    },
    {
      name: 'ZOD',
      description:
        'Zod is a TypeScript-first schema declaration and validation library.',
      logo: 'Zod',
    },
    {
      name: 'Auto Form',
      description: 'Create your forms automatically from your schema',
      logo: 'AutoForm',
    },
    {
      name: 'Neon Database',
      description: 'Serverless Postgres database for developers.',
      logo: 'NeonDatabase',
    },
    {
      name: 'Dnd Kit',
      description: 'A set of utilities to create drag and drop interfaces.',
      logo: 'DndKit',
    },
    {
      name: 'Video Player',
      description:
        'vidstack supports videos from your source, vimo, youtube and more',
      logo: 'VidStack',
    },
    {
      name: 'DateFns',
      description: 'Modern JavaScript date utility library.',
      logo: 'DateFns',
    },
    {
      name: 'Lodash',
      description: 'A modern JavaScript utility library delivering modularity.',
      logo: 'Lodash',
    },
    {
      name: 'Framer Motion',
      description: 'A production-ready motion library for React.',
      logo: 'FramerMotion',
    },
    {
      name: 'CommitLint',
      description: 'Lint your commit messages to ensure consistency.',
      logo: 'CommitLint',
    },
    {
      name: 'ESLint',
      description: 'Find and fix problems in your JavaScript code.',
      logo: 'ESLint',
    },
    {
      name: 'Prettier',
      description: 'An opinionated code formatter.',
      logo: 'Prettier',
    },
    {
      name: 'Gulp',
      description: 'A toolkit to automate & enhance your workflow.',
      logo: 'Gulp',
    },
    {
      name: 'Husky',
      description: 'Git hooks made easy.',
      logo: 'Husky',
    },
    {
      name: 'Lint Staged',
      description: 'Run linters on git staged files.',
      logo: 'LintStaged',
    },
    {
      name: 'TypeScript',
      description: 'A strongly typed programming language for JavaScript.',
      logo: 'TypeScript',
    },
    {
      name: 'Lucid Icons',
      description: 'A collection of beautifully crafted icons.',
      logo: 'LucidIcons',
    },
    {
      name: 'Radix UI',
      description: 'Accessible, high-quality UI components for React.',
      logo: 'RadixUi',
    },
    {
      name: 'Nuqs',
      description: 'Type-safe search params state manager for React',
      logo: 'Nuqs',
    },
  ];
});
