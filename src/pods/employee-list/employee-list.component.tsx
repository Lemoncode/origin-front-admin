import React from 'react';
import { routes } from 'core/router';
import {
  TableContainer,
  RowRendererProps,
  useSearchBar,
} from 'common/components';
import { Employee } from './employee-list.vm';
import { EmployeeRowComponent } from './components';

interface Props {
  employeeList: Employee[];
}

export const EmployeeListComponent: React.FunctionComponent<Props> = ({
  employeeList,
}) => {
  const { filteredList, onSearch, search } = useSearchBar(employeeList, [
    'name',
  ]);
  return (
    <>
      <TableContainer
        columns={['Activo', 'Id', 'Nombre', 'Email', 'Fecha último incurrido']}
        rows={filteredList}
        rowRenderer={(rowProps: RowRendererProps<Employee>) => (
          <EmployeeRowComponent {...rowProps} />
        )}
        onCreate={() => console.log}
        labels={{
          searchPlaceholder: 'Buscar empleados',
          createButton: 'Nuevo empleado',
        }}
        enableSearch={true}
        search={search}
        onSearch={onSearch}
        enablePagination={true}
        pageSize={5}
      />
    </>
  );
};
