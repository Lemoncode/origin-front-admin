import React from 'react';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import AppBar from '@material-ui/core/AppBar';
import { DataComponent, ProjectComponent, ReportComponent } from './components';
import { Employee, Report, EmployeeProject } from './employee.vm';
import * as classes from './employee.styles';

interface Props {
  employee: Employee;
  isEditMode: boolean;
  report: Report;
  onSaveEmployee: (employee: Employee) => void;
  onSaveProjectSelection: (project: EmployeeProject[]) => void;
  onCancel: () => void;
  onGenerateExcel: (report: Report) => void;
}

export const EmployeeComponent: React.FunctionComponent<Props> = ({
  employee,
  isEditMode,
  report,
  onSaveEmployee,
  onSaveProjectSelection,
  onCancel,
  onGenerateExcel,
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Datos" />
          <TabComponent label="Proyectos" disabled={!isEditMode} />
          <TabComponent label="Informes" disabled={!isEditMode} />
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        <DataComponent
          employee={employee}
          className={classes.root}
          onSave={onSaveEmployee}
          isEditMode={isEditMode}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <ProjectComponent
          employeeProjectList={employee.projects}
          className={classes.root}
          onSave={onSaveProjectSelection}
          onCancel={onCancel}
        />
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={2}>
        <ReportComponent
          report={report}
          className={classes.root}
          onGenerateExcel={onGenerateExcel}
          onCancel={onCancel}
        />
      </TabPanelComponent>
    </>
  );
};
