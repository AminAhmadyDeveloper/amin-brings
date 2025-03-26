import type { FC } from 'react';
import { Fragment } from 'react';

import Image from 'next/image';

import { Marquee } from '@/components/ui/marquee';
import { For } from '@/components/utils/for';
import { cn } from '@/libraries/tailwind-utils';

const reviews = [
  {
    name: 'Amir',
    username: '@amir',
    body: 'I have never seen anything this good! It’s truly amazing! I love it!',
  },
  {
    name: 'Leila',
    username: '@leila',
    body: 'Honestly, I have no words! Just amazed! It’s great!',
  },
  {
    name: 'Reza',
    username: '@reza',
    body: 'This experience is incredible! I truly love it.',
  },
  {
    name: 'Sara',
    username: '@sara',
    body: 'I can only say, this place is so good! I really feel great.',
  },
  {
    name: 'Narges',
    username: '@narges',
    body: 'This place is so cool! I truly love it.',
  },
  {
    name: 'Mahdi',
    username: '@mahdi',
    body: 'Everything here is amazing! I feel like I’m flying on clouds!',
  },
];

const ReviewCard: FC<(typeof reviews)[0]> = ({ name, username, body }) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'bg-card hover:bg-opacity-85',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src="/placeholder.svg"
        />
        <div className="flex flex-col">
          <figcaption className="text-card-foreground text-sm font-medium">
            {name}
          </figcaption>
          <p className="text-card-foreground/70 text-xs font-medium">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const ReviewsList: FC = () => {
  return (
    <Fragment>
      <Marquee pauseOnHover className="[--duration:20s]">
        <For each={reviews}>
          {(review) => <ReviewCard key={review.username} {...review} />}
        </For>
      </Marquee>
    </Fragment>
  );
};
