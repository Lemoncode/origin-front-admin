import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import AppBar from '@material-ui/core/AppBar';
import {
  DataComponent,
  EmployeeComponent,
  ReportComponent,
} from './components';
import { Project, Report, ProjectEmployee } from './project.vm';
import * as classes from './project.styles';

interface Props {
  isEditMode: boolean;
  project: Project;
  report: Report;
  onSaveProject: (project: Project) => void;
  onSaveEmployeeSelection: (employeeProjectList: ProjectEmployee[]) => void;
  onCancel: () => void;
  onGenerateExcel: (report: Report) => void;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  isEditMode,
  project,
  report,
  onSaveProject,
  onSaveEmployeeSelection,
  onCancel,
  onGenerateExcel,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Datos" />
          <TabComponent label="Empleados" disabled={!isEditMode} />
          <TabComponent label="Informes" disabled={!isEditMode} />
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent
          project={project}
          onCancel={onCancel}
          onSave={onSaveProject}
          className={classes.root}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <EmployeeComponent
          projectEmployeeList={project.employees}
          onSave={onSaveEmployeeSelection}
          onCancel={onCancel}
          className={classes.root}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent
          report={report}
          onCancel={onCancel}
          className={classes.root}
          onGenerateExcel={onGenerateExcel}
        />
      </TabPanelComponent>
    </>
  );
};
