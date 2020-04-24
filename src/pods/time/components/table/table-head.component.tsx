import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const HeadCell: React.FC = ({ children }) => (
  <TableCell align="center">{children}</TableCell>
);

interface Props {
  columns: string[];
}

// TODO: Pending to define the backend
const getDayOfWeek = (date: string): string => {
  const [day, month, year] = date.split('/');
  const daysOfWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  const transformedDate = new Date(+year, +month, +day);
  return daysOfWeek[transformedDate.getDay()];
};

export const TableHeadComponent: React.FC<Props> = ({ columns }) => (
  <TableHead>
    <TableRow>
      <TableCell></TableCell>
      {columns.map((title, index) => (
        <HeadCell key={index}>
          {title}
          <br />
          {getDayOfWeek(title)}
        </HeadCell>
      ))}
    </TableRow>
  </TableHead>
);
