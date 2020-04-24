import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ActionsComponent,
  TableComponent,
  ToolbarComponent,
} from './components';
import * as VM from './time.vm';
import * as classes from './time.styles';

interface Props {
  projects: VM.Project[];
  updateProject: (nameProject: string, assignment: VM.Assignment) => void;
  columns: string[];
  counters: VM.Counter[];
}

export const TimeComponent: React.FC<Props> = ({
  projects,
  updateProject,
  columns,
  counters,
}) => {
  const handleOnChange = (nameProject: string, item: VM.Assignment) => {
    updateProject(nameProject, item);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <ToolbarComponent />
        <TableComponent
          items={projects}
          onChange={handleOnChange}
          columns={columns}
          counters={counters}
        />
      </Paper>
      <ActionsComponent />
    </>
  );
};
