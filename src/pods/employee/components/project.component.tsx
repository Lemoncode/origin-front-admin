import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { EmployeeProject } from '../employee.vm';
import { EmployeeRowComponent } from './project-row.component';
import { CommandFooterComponent } from 'common-app/command-footer';

interface Props {
  employeeProjectList: EmployeeProject[];
  onSave: (project: EmployeeProject[]) => void;
  onCancel: () => void;
  className?: string;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  employeeProjectList,
  onSave,
  onCancel,
  className,
}) => {
  const [projectList, setProjectList] = React.useState<EmployeeProject[]>(
    employeeProjectList
  );

  React.useEffect(() => {
    setProjectList(employeeProjectList);
  }, [employeeProjectList]);

  const handleChangeProject = (id: string) => (project: EmployeeProject) => {
    const updateProjectList = projectList.map(p => (p.id === id ? project : p));
    setProjectList(updateProjectList);
  };

  const handleSave = () => onSave(projectList);
  return (
    <>
      <TableContainer
        columns={['Asignado', 'Nombre']}
        rows={projectList}
        className={className}
        rowRenderer={(rowProps: RowRendererProps<EmployeeProject>) => (
          <EmployeeRowComponent
            {...rowProps}
            onChangeProject={handleChangeProject(rowProps.row.id)}
          />
        )}
      />
      <CommandFooterComponent onSave={handleSave} onCancel={onCancel} />
    </>
  );
};
