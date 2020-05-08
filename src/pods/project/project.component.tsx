import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { AppBar } from '@material-ui/core';
import {
  DataComponent,
  EmployeeComponent,
  ReportComponent,
} from './components';
import { Project } from './project.vm';

interface Props {
  isEditMode: boolean;
  project: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  isEditMode,
  project,
  onSave,
  onCancel,
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
        <DataComponent project={project} onCancel={onCancel} onSave={onSave} />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <EmployeeComponent
          employeeSummaryList={project.employees}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent onCancel={onCancel} />
      </TabPanelComponent>
    </>
  );
};
