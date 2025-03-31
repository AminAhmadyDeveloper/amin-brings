import { CodeIcon } from 'lucide-react';
import type { FC } from 'react';

import { ThemeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/libraries/tailwind-utils';

const twitterUrl = 'https://twitter.com/MorningStartHero';

export const Footer: FC<ReactHtmlElement> = ({ className, ...props }) => {
  return (
    <footer className={cn(className, 'px-4 py-6')} {...props}>
      <div className="flex items-center p-0">
        <CodeIcon className="me-2 size-6" />
        <p className="text-sm">
          Developed by{' '}
          <a className="underline underline-offset-4" href={twitterUrl}>
            Amin Ahmady
          </a>
          .
        </p>
        <div className="ms-auto">
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
};
