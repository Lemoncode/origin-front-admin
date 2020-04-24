import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CellComponent } from './cell.component';
import * as classes from './header.styles';

interface Props {
  columns: string[];
}

export const HeaderComponent: React.FunctionComponent<Props> = props => {
  return (
    <TableHead className={classes.root}>
      <TableRow>
        {props.columns.map((columnName, index) => (
          <CellComponent key={index}>{columnName}</CellComponent>
        ))}
      </TableRow>
    </TableHead>
  );
};
