import { graphQLClient } from 'core/api';
import { Employee } from './employee-list.api-model';

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

interface DeleteEmployeeResponse {
  deleteEmployee: boolean;
}

export const deleteEmployee = async (id: string): Promise<boolean> => {
  const query = `
    mutation {
      deleteEmployee(id: "${id}")
    }
  `;
  const { deleteEmployee } = await graphQLClient.request<
    DeleteEmployeeResponse
  >(query);
  return deleteEmployee;
};
