import React from 'react';
import { EmployeeComponent } from './employee.component';
import {
  Employee,
  Report,
  createEmptyEmployee,
  createEmptyReport,
  ProjectSummary,
} from './employee.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { getEmployeeById, saveEmployee, saveProjectSummary } from './api';
import {
  mapEmployeeFromApiToVm,
  mapEmployeeFromVmToApi,
  mapProjectSummaryListFromVmToApi,
} from './employee.mappers';
import { useParams } from 'react-router-dom';
import { isEditModeHelper } from 'common/helpers';
import { routes, EditParams } from 'core/router';
import { useHistory } from 'react-router';

export const EmployeeContainer: React.FunctionComponent = () => {
  const params = useParams<EditParams>();
  const [employee, setEmployee] = React.useState<Employee>(
    createEmptyEmployee()
  );
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [report, setReport] = React.useState<Report>(createEmptyReport());
  const { showMessage } = useSnackbarContext();
  const history = useHistory();

  const onLoadEmployee = async () => {
    try {
      const apiEmployee = await trackPromise(getEmployeeById(params.id));
      const viewModelEmployee = mapEmployeeFromApiToVm(apiEmployee);
      setEmployee(viewModelEmployee);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar el empleado', 'error');
    }
  };

  const handleSuccessSaveEmployee = (id: string, newEmployee: Employee) => {
    if (id) {
      showMessage('Empleado guardado con éxito', 'success');
      setEmployee(newEmployee);
      history.push(routes.editEmployee(id));
    } else {
      showMessage('Ha ocurrido un error al guardar el empleado', 'error');
    }
  };

  const handleSaveEmployee = async (employee: Employee) => {
    try {
      const apiEmployee = mapEmployeeFromVmToApi(employee);
      const id = await trackPromise(saveEmployee(apiEmployee));
      handleSuccessSaveEmployee(id, employee);
    } catch (error) {
      error && showMessage(error.message, 'error');
    }
  };

  const handleSaveProjectSelection = async (
    employeeSummary: ProjectSummary[]
  ) => {
    if (params.id) {
      try {
        const apiProjectSummary = mapProjectSummaryListFromVmToApi(
          employeeSummary
        );
        await trackPromise(saveProjectSummary(params.id, apiProjectSummary));
        setEmployee({
          ...employee,
          projects: employeeSummary,
        });
        showMessage('Se actualizó con éxito', 'success');
      } catch (error) {
        error && showMessage('Ha ocurrido un error al guardar', 'error');
      }
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleGenerateExcel = (report: Report) => {
    // Pending to create real implementation
    console.log('Excel creado');
  };

  React.useEffect(() => {
    const isEditMode = isEditModeHelper(params.id);
    setIsEditMode(isEditMode);
    if (isEditMode) {
      onLoadEmployee();
    }
  }, []);

  return (
    <EmployeeComponent
      employee={employee}
      isEditMode={isEditMode}
      report={report}
      onSaveEmployee={handleSaveEmployee}
      onSaveProjectSelection={handleSaveProjectSelection}
      onCancel={handleCancel}
      onGenerateExcel={handleGenerateExcel}
    />
  );
};
