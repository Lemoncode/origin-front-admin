import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { AppBar } from '@material-ui/core';

export const ProjectComponent: React.FunctionComponent = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Datos" />
          <TabComponent label="Empleados" />
          <TabComponent label="Informes" />
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        Hello Data component
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        Hello Employee component
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        Hello Report component
      </TabPanelComponent>
    </>
  );
};
