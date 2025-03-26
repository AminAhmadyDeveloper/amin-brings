import { ArrowRightIcon } from 'lucide-react';
import type { FC } from 'react';

import Link from 'next/link';

import { HeroSectionImage } from '@/app/(root)/_components/hero-section-image';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ShineBorder } from '@/components/ui/shine-border';
import { SparklesText } from '@/components/ui/sparkles-text';
import { getSessionOnServer } from '@/libraries/auth-utils';
import { cn } from '@/libraries/tailwind-utils';

export const HeroSection: FC = async () => {
  const session = await getSessionOnServer();

  return (
    <section className="mx-auto grid min-h-[calc(100vh-300px)] flex-col items-center justify-center gap-4 py-10 text-center md:py-12">
      <div className="p-4">
        <div className="relative">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Link href="/">
              <AnimatedShinyText className="flex items-center px-4 py-1">
                Amin Brings
              </AnimatedShinyText>
            </Link>
          </div>
          <SparklesText sparklesCount={4} text="Amin Brings" />
          <h1 className="mt-5 text-center text-3xl font-bold text-balance sm:text-5xl md:text-5xl">
            A Nextjs, Better Auth, Drizzle Boilerplate
          </h1>
          <p className="text-muted-foreground mt-4 text-center text-balance md:text-lg lg:text-xl">
            A Next.js boilerplate with better authentication and Drizzle
            integration
          </p>
        </div>
        <div className="my-12 flex justify-center gap-4 xl:mb-24">
          <EnhancedButton
            asChild
            size="lg"
            icon={ArrowRightIcon}
            iconPlacement="right"
            effect="shineHover"
            className="cursor-pointer"
          >
            <Link href={session?.session ? '/dashboard' : '/login'}>
              Get Started
            </Link>
          </EnhancedButton>
        </div>
        <div
          className={cn(
            'relative mb-10 grid place-items-center',
            'before:animate-image-glow before:absolute before:top-32 before:right-32 before:bottom-1/2 before:left-32 before:h-full before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:opacity-0 before:[filter:blur(180px)] rounded-t-xl',
          )}
        >
          <ShineBorder color={['var(--color-one)']}>
            <div className="to-background absolute bottom-0 left-0 size-full rounded-t-xl bg-gradient-to-b from-transparent" />
            <HeroSectionImage />
          </ShineBorder>
        </div>
      </div>
    </section>
  );
};
