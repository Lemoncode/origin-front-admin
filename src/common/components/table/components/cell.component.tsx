import React from 'react';
import TableCell, { TableCellProps } from '@material-ui/core/TableCell';

export const CellComponent: React.FunctionComponent<TableCellProps> = props => {
  const { children, ...rest } = props;
  return <TableCell {...rest}>{children}</TableCell>;
};

CellComponent.defaultProps = {
  align: 'left',
};
