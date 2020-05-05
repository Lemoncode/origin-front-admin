import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { ProjectSummary } from '../employee.vm';
import { EmployeeRowComponent } from './project-row.component';

interface Props {
  projectSummaryList: ProjectSummary[];
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  projectSummaryList,
}) => {
  return (
    <TableContainer
      columns={['Asignado', 'Nombre y Apellido']}
      rows={projectSummaryList}
      rowRenderer={(rowProps: RowRendererProps<ProjectSummary>) => (
        <EmployeeRowComponent {...rowProps} />
      )}
    />
  );
};
