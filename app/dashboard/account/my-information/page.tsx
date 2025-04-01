import { SettingsCards } from '@daveyplate/better-auth-ui';

import React from 'react';

const MyInformationPage = () => {
  return (
    <div>
      <SettingsCards
        classNames={{
          card: {
            base: 'w-full',
          },
          tabs: {
            list: 'max-w-md',
          },
          base: 'max-w-full',
        }}
      />
    </div>
  );
};

export default MyInformationPage;
