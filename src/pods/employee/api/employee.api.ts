import { Employee } from './employee.api-model';
import { graphQLClient } from 'core/api';

interface GetEmployeeResponse {
  employee: Employee;
}

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const query = `
    query {
      employee(id: "${id}") {
        id
        name
      }
    }
  `;

  const { employee } = await graphQLClient.request<GetEmployeeResponse>(query);

  return employee;
};
