import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { DataComponent, ProjectComponent, ReportComponent } from './components';
import { ProjectSummary } from './employee.vm';
import * as classes from './employee.styles';

interface Props {
  projectSummaryList: ProjectSummary[];
  isEditMode: boolean;
  onCancel: () => void;
}

export const EmployeeComponent: React.FunctionComponent<Props> = ({
  projectSummaryList,
  isEditMode,
  onCancel,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <TabListComponent value={tab} onChange={setTab}>
        <TabComponent label="Datos" />
        <TabComponent label="Proyectos" />
        <TabComponent label="Informes" />
      </TabListComponent>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent
          className={classes.root}
          isEditMode={isEditMode}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <ProjectComponent
          projectSummaryList={projectSummaryList}
          className={classes.root}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent className={classes.root} onCancel={onCancel} />
      </TabPanelComponent>
    </>
  );
};
