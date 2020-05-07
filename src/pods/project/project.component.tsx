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

interface Props {
  isEditMode: boolean;
}

export const ProjectComponent: React.FunctionComponent<Props> = ({
  isEditMode,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Datos" />
          <TabComponent label="Empleados" disabled={isEditMode} />
          <TabComponent label="Informes" disabled={isEditMode} />
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <EmployeeComponent />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent />
      </TabPanelComponent>
    </>
  );
};
