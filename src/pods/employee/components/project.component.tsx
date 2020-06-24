import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { EmployeeProject } from '../employee.vm';
import { EmployeeRowComponent } from './project-row.component';
import { CommandFooterComponent } from 'common-app/command-footer';

interface Props {
  projectSummaryList: EmployeeProject[];
  className?: string;
  onSave: (project: EmployeeProject[]) => void;
  onCancel: () => void;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  projectSummaryList,
  className,
  onSave,
  onCancel,
}) => {
  const [projectList, setProjectList] = React.useState<EmployeeProject[]>(
    projectSummaryList
  );

  React.useEffect(() => {
    setProjectList(projectSummaryList);
  }, [projectSummaryList]);

  const handleChangeProject = (id: string) => (project: EmployeeProject) => {
    const updateProjectList = projectList.map(p => (p.id === id ? project : p));
    setProjectList(updateProjectList);
  };

  const handleSave = () => onSave(projectList);
  return (
    <>
      <TableContainer
        columns={['Asignado', 'Nombre y Apellido']}
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
