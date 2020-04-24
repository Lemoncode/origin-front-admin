import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import { TableRowComponent } from './table-row.component';
import * as VM from '../../time.vm';

interface Props {
  items: VM.Project[];
  onChange: (nameProject: string, item: VM.Assignment) => void;
}
export const TableContentComponent: React.FC<Props> = ({ items, onChange }) => (
  <TableBody>
    {items.map((item, index) => (
      <TableRowComponent item={item} key={index} onChange={onChange} />
    ))}
  </TableBody>
);
