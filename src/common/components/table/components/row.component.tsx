import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import { cx } from 'emotion';
import * as classes from './row.component.styles';

interface Props {
  className?: string;
  'data-testid'?: string;
}

export const RowComponent: React.FunctionComponent<Props> = props => {
  const { className, children } = props;
  return (
    <TableRow
      className={cx(classes.root, className)}
      data-testid={props['data-testid']}
    >
      {children}
    </TableRow>
  );
};
