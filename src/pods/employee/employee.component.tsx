import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { DataComponent, ProjectComponent, ReportComponent } from './components';
import { Employee } from './employee.vm';
import * as classes from './employee.styles';

interface Props {
  employee: Employee;
  isEditMode: boolean;
  onSave: (employee: Employee) => void;
  onCancel: () => void;
  onGenerateExcel: () => void;
}

export const EmployeeComponent: React.FunctionComponent<Props> = ({
  employee,
  isEditMode,
  onSave,
  onCancel,
  onGenerateExcel,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <TabListComponent value={tab} onChange={setTab}>
        <TabComponent label="Datos" />
        <TabComponent label="Proyectos" disabled={!isEditMode} />
        <TabComponent label="Informes" disabled={!isEditMode} />
      </TabListComponent>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent
          employee={employee}
          className={classes.root}
          onSave={onSave}
          isEditMode={isEditMode}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <ProjectComponent
          projectSummaryList={employee.projects}
          className={classes.root}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent
          className={classes.root}
          onGenerateExcel={onGenerateExcel}
          onCancel={onCancel}
        />
      </TabPanelComponent>
    </>
  );
};
