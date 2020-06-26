import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { ProjectEmployee } from '../project.vm';
import { CommandFooterComponent } from 'common-app/command-footer';
import { ProjectRowComponent } from './employee-row.component';

interface Props {
  projectEmployeeList: ProjectEmployee[];
  onSave: (projectEmployeeList: ProjectEmployee[]) => void;
  onCancel: () => void;
  className: string;
}

export const EmployeeComponent: React.FunctionComponent<Props> = ({
  projectEmployeeList,
  onSave,
  onCancel,
  className,
}) => {
  const [employeeList, setProjectList] = React.useState<ProjectEmployee[]>(
    projectEmployeeList
  );

  React.useEffect(() => {
    setProjectList(projectEmployeeList);
  }, [projectEmployeeList]);

  const handleChangeEmployee = (id: string) => (employee: ProjectEmployee) => {
    const updateEmployeeList = employeeList.map(e =>
      e.id === id ? employee : e
    );
    setProjectList(updateEmployeeList);
  };

  const handleSave = () => onSave(employeeList);
  return (
    <>
      <TableContainer
        columns={['Asignado', 'Empleado']}
        rows={employeeList}
        className={className}
        rowRenderer={(rowProps: RowRendererProps<ProjectEmployee>) => (
          <ProjectRowComponent
            {...rowProps}
            onChangeEmployee={handleChangeEmployee(rowProps.row.id)}
          />
        )}
      />
      <CommandFooterComponent onSave={handleSave} onCancel={onCancel} />
    </>
  );
};
