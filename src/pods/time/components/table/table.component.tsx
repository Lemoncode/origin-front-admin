import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import { TableFooterComponent } from './table-footer.component';
import { TableHeadComponent } from './table-head.component';
import { TableContentComponent } from './table-content.component';
import * as VM from '../../time.vm';
import * as classes from './table.styles';

interface Props {
  columns: string[];
  counters: VM.Counter[];
  items: VM.Project[];
  onChange: (nameProject: string, item: VM.Assignment) => void;
}

export const TableComponent: React.FC<Props> = ({
  items,
  onChange,
  columns,
  counters,
}) => {
  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHeadComponent columns={columns} />
        <TableContentComponent items={items} onChange={onChange} />
        <TableFooterComponent counters={counters} />
      </Table>
    </TableContainer>
  );
};
