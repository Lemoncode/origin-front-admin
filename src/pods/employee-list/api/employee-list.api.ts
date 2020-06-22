import { graphQLClient } from 'core/api';
import { Employee } from './employee-list.api-model';
import { mockEmployeeList } from './employee-list.mock-data';

let employeeList = [...mockEmployeeList];

interface GetEmployeeListResponse {
  employees: Employee[];
}

export const getEmployeeList = async (): Promise<Employee[]> => {
  const query = `
    query {
      employees {
        id
        name
      }
    }
  `;
  const { employees } = await graphQLClient.request<GetEmployeeListResponse>(
    query
  );
  return employees;
};

export const deleteEmployee = async (id: string): Promise<boolean> => {
  employeeList = employeeList.filter(e => e.id !== id);
  return true;
};
