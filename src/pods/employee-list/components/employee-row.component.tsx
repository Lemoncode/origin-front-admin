import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Employee } from '../employee-list.vm';

type Props = RowRendererProps<Employee>;

export const EmployeeRowComponent: React.FunctionComponent<Props> = props => {
  const { row, onEdit, onDelete } = props;

  return (
    <RowComponent>
      <CellComponent>{row.active}</CellComponent>
      <CellComponent>{row.id}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.email}</CellComponent>
      <CellComponent>
        {row.lastDateIncurred}
        <IconButton onClick={() => onEdit(row.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(row)}>
          <DeleteIcon />
        </IconButton>
      </CellComponent>
    </RowComponent>
  );
};
