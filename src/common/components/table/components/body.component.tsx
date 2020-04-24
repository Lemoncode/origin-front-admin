import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { RowComponent } from './row.component';
import { CellComponent } from './cell.component';
import { RowRendererProps } from '../table.vm';

interface Props<T = {}> {
  rows: T[];
  rowRenderer?: React.ComponentType<RowRendererProps<T>>;
}

export const BodyComponent: React.FunctionComponent<Props> = props => {
  const { rowRenderer: RowRenderer, rows } = props;
  return (
    <TableBody>
      {rows.map((row, key) =>
        RowRenderer ? (
          <RowRenderer key={key} row={row} />
        ) : (
          <RowComponent key={key}>
            {Object.keys(row).map(key => (
              <CellComponent key={key}>{row[key]}</CellComponent>
            ))}
          </RowComponent>
        )
      )}
    </TableBody>
  );
};
