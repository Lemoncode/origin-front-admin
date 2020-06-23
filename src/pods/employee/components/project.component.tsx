import React from 'react';
import { TableContainer, RowRendererProps } from 'common/components';
import { ProjectSummary } from '../employee.vm';
import { EmployeeRowComponent } from './project-row.component';
import { CommandFooterComponent } from 'common-app/command-footer';

interface Props {
  projectSummaryList: ProjectSummary[];
  className?: string;
  onSave: (project: ProjectSummary[]) => void;
  onCancel: () => void;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  projectSummaryList,
  className,
  onSave,
  onCancel,
}) => {
  const [projectList, setProjectList] = React.useState<ProjectSummary[]>(
    projectSummaryList
  );

  React.useEffect(() => {
    setProjectList(projectSummaryList);
  }, [projectSummaryList]);

  const handleChangeProject = (id: string) => (project: ProjectSummary) => {
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
        rowRenderer={(rowProps: RowRendererProps<ProjectSummary>) => (
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
