import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { DataComponent, ProjectComponent, ReportComponent } from './components';

export const EmployeeComponent: React.FunctionComponent = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <TabListComponent value={tab} onChange={setTab}>
        <TabComponent label="Datos" />
        <TabComponent label="Proyectos" />
        <TabComponent label="Informes" />
      </TabListComponent>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <ProjectComponent />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent />
      </TabPanelComponent>
    </>
  );
};
