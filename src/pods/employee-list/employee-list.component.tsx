import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const EmployeeListComponent: React.FunctionComponent = () => {
  const history = useHistory();
  const goToEmployee = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    event.preventDefault();
    history.push({
      pathname: routes.editEmployee('1'),
    });
  };
  return (
    <>
      <h1>Hello Employee list component</h1>
      <p onClick={goToEmployee}>Go to edit employee page</p>
    </>
  );
};
