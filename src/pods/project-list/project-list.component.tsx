import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const ProjectListComponent: React.FunctionComponent = () => {
  const history = useHistory();
  const goToProject = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    event.preventDefault();
    history.push({
      pathname: routes.editProject('1'),
    });
  };
  return (
    <>
      <h1>Hello Project list component</h1>
      <p onClick={goToProject}>Go to edit project component</p>
    </>
  );
};
