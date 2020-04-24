import React from 'react';
import Table from '@material-ui/core/Table';
import { HeaderComponent, BodyComponent } from './components';
import { RowRendererProps } from './table.vm';

interface Props<T = {}> {
  columns: string[];
  rows: T[];
  rowRenderer?: React.ComponentType<RowRendererProps<T>>;
}

export const TableComponent: React.FunctionComponent<Props> = props => {
  const { columns, rows, rowRenderer } = props;
  return (
    <Table>
      <HeaderComponent columns={columns} />
      <BodyComponent rows={rows} rowRenderer={rowRenderer} />
    </Table>
  );
};
