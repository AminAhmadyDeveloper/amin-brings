import { Time } from '@vidstack/react';

export const TimeGroup = () => {
  return (
    <div className="ml-2.5 flex items-center text-sm font-medium">
      <Time className="time" type="current" />
      <div className="mx-1">/</div>
      <Time className="time" type="duration" />
    </div>
  );
};
