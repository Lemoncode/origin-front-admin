import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const SumoduleListComponent: React.FunctionComponent = () => {
  const history = useHistory();
  const goToProjectList = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    event.preventDefault();
    history.push({
      pathname: routes.projects,
    });
  };

  const goToEmployeeList = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    event.preventDefault();
    history.push({
      pathname: routes.employees,
    });
  };

  return (
    // Pending to use dashboard component
    <>
      <h1>Hello Submodule List</h1>
      <p onClick={goToProjectList}>Go to Project list page</p>
      <p onClick={goToEmployeeList}>Go to Employee list page</p>
    </>
  );
};
