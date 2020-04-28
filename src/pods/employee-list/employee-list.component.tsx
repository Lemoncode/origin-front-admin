import React from 'react';
import { routes } from 'core/router';
import {
  TableContainer,
  RowComponent,
  RowRendererProps,
} from 'common/components/table';
import { Typography } from '@material-ui/core';
import { Employee } from './employee-list.vm';

interface Props {
  employees: Employee[];
}

export const EmployeeListComponent: React.FunctionComponent<Props> = ({
  employees,
}) => {
  return (
    <>
      <h1>Hello Employee list component</h1>
      <TableContainer
        columns={['Activo', 'Id', 'Nombre', 'Email', 'Fecha último incurrido']}
        rows={employees}
        rowRenderer={(props: RowRendererProps<any>) => (
          <RowComponent>
            <Typography>{props.row.name}</Typography>
          </RowComponent>
        )}
      />
    </>
  );
};
