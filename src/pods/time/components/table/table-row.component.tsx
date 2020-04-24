import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import * as VM from '../../time.vm';

interface RowProps {
  item: VM.Project;
  onChange: (nameProject: string, item: VM.Assignment) => void;
}

export const TableRowComponent: React.FC<RowProps> = ({ item, onChange }) => {
  const handleOnChange = (assignmentDate: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const assignment: VM.Assignment = {
      date: assignmentDate,
      hours: event.target.value,
    };
    onChange(item.name, assignment);
  };

  return (
    <TableRow hover={true}>
      <TableCell align="right" key={item.name}>
        {item.name}
      </TableCell>
      {item.assignments.map((assignment, index) => (
        <TableCell align="center" key={index}>
          <TextField
            size="small"
            type="time"
            variant="outlined"
            inputProps={{
              step: 600,
            }}
            value={assignment.hours}
            onChange={handleOnChange(assignment.date)}
          />
        </TableCell>
      ))}
    </TableRow>
  );
};
