import React from 'react';
import { EmployeeListComponent } from './employee-list.component';
import { getEmployeeList } from './api';
import { Employee } from './employee-list.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { mapEmployeeListFromApiToVm } from './employee-list.mappers';

export const EmployeeListContainer: React.FunctionComponent = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const { showMessage } = useSnackbarContext();

  const onLoadEmployeeList = async () => {
    try {
      const apiEmployeeList = await trackPromise(getEmployeeList());
      const viewModelEmloyeeList = mapEmployeeListFromApiToVm(apiEmployeeList);
      setEmployees(viewModelEmloyeeList);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar los empleados', 'error');
    }
  };

  React.useEffect(() => {
    onLoadEmployeeList();
  }, []);

  return <EmployeeListComponent employees={employees} />;
};
