import React from 'react';
import { AppLayout } from 'layouts';
import { SumoduleListComponent } from 'pods/submodule-list';

export const SubmoduleListScene: React.FC = () => {
  return (
    <AppLayout>
      <SumoduleListComponent />
    </AppLayout>
  );
};
