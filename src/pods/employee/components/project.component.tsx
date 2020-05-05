import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { ProjectSummary } from '../employee.vm';
import { EmployeeRowComponent } from './project-row.component';
import { CommandFooterComponent } from 'common-app/command-footer';

interface Props {
  projectSummaryList: ProjectSummary[];
  className?: string;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  projectSummaryList,
  className,
}) => {
  return (
    <>
      <TableContainer
        columns={['Asignado', 'Nombre y Apellido']}
        rows={projectSummaryList}
        className={className}
        rowRenderer={(rowProps: RowRendererProps<ProjectSummary>) => (
          <EmployeeRowComponent {...rowProps} />
        )}
      />
      <CommandFooterComponent onCancel={console.log} />
    </>
  );
};
