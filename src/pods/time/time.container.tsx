import React from 'react';
import { TimeComponent } from './time.component';
import { header } from './time.mock';
import { useProjects } from './time.hooks';

export const TimeContainer: React.FC = () => {
  const { projects, updateProject, counters } = useProjects();

  return (
    <TimeComponent
      projects={projects}
      updateProject={updateProject}
      columns={header}
      counters={counters}
    />
  );
};
