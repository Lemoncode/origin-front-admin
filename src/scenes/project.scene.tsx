import React from 'react';
import { AppLayout } from 'layouts';
import { ProjectComponent } from 'pods/project';

export const ProjectScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <ProjectComponent />
    </AppLayout>
  );
};
