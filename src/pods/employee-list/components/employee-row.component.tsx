import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Employee } from '../employee-list.vm';

type Props = RowRendererProps<Employee>;

export const EmployeeRowComponent: React.FunctionComponent<Props> = ({
  row,
  onEdit,
  onDelete,
}) => {
  return (
    <RowComponent>
      <CellComponent>{row.active}</CellComponent>
      <CellComponent>{row.id}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.email}</CellComponent>
      <CellComponent>{row.lastDateIncurred}</CellComponent>
    </RowComponent>
  );
};
