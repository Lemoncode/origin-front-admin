import React from 'react';
import { EmployeeComponent } from './employee.component';
import {
  Employee,
  Report,
  createEmptyEmployee,
  createEmptyReport,
} from './employee.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { getEmployeeById, saveEmployee } from './api';
import {
  mapEmployeeFromApiToVm,
  mapEmployeeFromVmToApi,
} from './employee.mappers';
import { useParams } from 'react-router-dom';
import { isEditModeHelper } from 'common/helpers';

export const EmployeeContainer: React.FunctionComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = React.useState<Employee>(
    createEmptyEmployee()
  );
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [report, setReport] = React.useState<Report>(createEmptyReport());
  const { showMessage } = useSnackbarContext();

  const onLoadEmployee = async () => {
    try {
      const apiEmployee = await trackPromise(getEmployeeById(id));
      const viewModelEmployee = mapEmployeeFromApiToVm(apiEmployee);
      setEmployee(viewModelEmployee);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar el empleado', 'error');
    }
  };

  const handleSave = async (employee: Employee) => {
    try {
      const apiEmployee = mapEmployeeFromVmToApi(employee);
      const id = await saveEmployee(apiEmployee);
      setEmployee({ ...employee, id });
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al guardar el empleado', 'error');
    }
  };

  const handleCancel = () => {
    history.back();
  };

  const handleGenerateExcel = (report: Report) => {
    // Pending to create real implementation
    console.log('Excel creado');
  };

  React.useEffect(() => {
    const isEditMode = isEditModeHelper(id);
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
      onSave={handleSave}
      onCancel={handleCancel}
      onGenerateExcel={handleGenerateExcel}
    />
  );
};
