import { ChapterTitle } from '@vidstack/react';

export const Title = () => {
  return (
    <span className="text-muted-foreground inline-block flex-1 overflow-hidden px-2 text-sm font-medium text-ellipsis whitespace-nowrap">
      <span className="mr-1">|</span>
      <ChapterTitle />
    </span>
  );
};
