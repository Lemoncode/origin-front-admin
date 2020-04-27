import React from 'react';
import { AppLayout } from 'layouts';
import { ProjectListComponent } from 'pods/project-list';

export const ProjectListScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <ProjectListComponent />
    </AppLayout>
  );
};
