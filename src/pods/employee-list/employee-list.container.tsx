import React from 'react';
import { EmployeeListComponent } from './employee-list.component';
import { getEmployeeList } from './api';
import { Employee } from './employee-list.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { mapEmployeeListFromApiToVm } from './employee-list.mappers';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

export const EmployeeListContainer: React.FunctionComponent = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const { showMessage } = useSnackbarContext();
  const history = useHistory();

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

  const handleCreate = () => {
    history.push(routes.editEmployee('0'));
  };

  const handleEdit = (id: string) => {
    history.push(routes.editEmployee(id));
  };

  React.useEffect(() => {
    onLoadEmployeeList();
  }, []);

  return (
    <EmployeeListComponent
      employeeList={employees}
      onCreate={handleCreate}
      onEdit={handleEdit}
    />
  );
};
