import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { ProjectEmployee } from '../project.vm';
import { CommandFooterComponent } from 'common-app/command-footer';
import { ProjectRowComponent } from './employee-row.component';

interface Props {
  projectEmployeeList: ProjectEmployee[];
  onCancel: () => void;
  className: string;
}

export const EmployeeComponent: React.FunctionComponent<Props> = ({
  projectEmployeeList,
  onCancel,
  className,
}) => {
  return (
    <>
      <TableContainer
        columns={['Asignado', 'Empleado']}
        rows={projectEmployeeList}
        className={className}
        rowRenderer={(rowProps: RowRendererProps<ProjectEmployee>) => (
          <ProjectRowComponent {...rowProps} />
        )}
      />
      <CommandFooterComponent onCancel={onCancel} />
    </>
  );
};
