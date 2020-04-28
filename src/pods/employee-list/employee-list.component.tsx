import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import {
  TableContainer,
  RowComponent,
  RowRendererProps,
} from 'common/components/table';
import { Typography } from '@material-ui/core';

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
      <TableContainer
        columns={['Column 1']}
        rows={[{ id: '1', name: 'test 1' }]}
        rowRenderer={(props: RowRendererProps<any>) => (
          <RowComponent>
            <Typography>{props.row.name}</Typography>
          </RowComponent>
        )}
      />
    </>
  );
};
