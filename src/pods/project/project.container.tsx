import React from 'react';
import { ProjectComponent } from './project.component';
import { useParams } from 'react-router-dom';

export const ProjectContainer: React.FunctionComponent = () => {
  const { id } = useParams();
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  return <ProjectComponent isEditMode={isEditMode} />;
};
