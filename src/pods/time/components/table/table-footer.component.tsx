import React from 'react';
import { cx } from 'emotion';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import * as VM from '../../time.vm';
import * as classes from './table-footer.styles';

interface Props {
  counters: VM.Counter[];
}

export const TableFooterComponent: React.FC<Props> = ({ counters }) => {
  const getClassColor = React.useCallback(
    (counter: string): string =>
      counter === '00:00'
        ? classes.color.success
        : counter > '00:00' && counter <= '03:00'
        ? classes.color.warning
        : classes.color.error,
    [classes.color]
  );

  return (
    <tfoot>
      <TableRow>
        <TableCell align="right" className={classes.footer}>
          Total
        </TableCell>
        {counters.map((counter, index) => (
          <TableCell key={index} className={classes.footer} align="center">
            <Typography
              className={cx(classes.total, getClassColor(counter.hours))}
            >
              {counter.hours}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </tfoot>
  );
};
