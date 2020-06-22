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
        isActive
        email
        lastDateIncurred
      }
    }
  `;

  const { employee } = await graphQLClient.request<GetEmployeeResponse>(query);

  return employee;
};

interface SaveEmployeeResponse {
  saveEmployee: Employee;
}

export const saveEmployee = async (employee: Employee): Promise<string> => {
  const query = `
    mutation($employee: EmployeeInput!) {
      saveEmployee(employee: $employee) {
        id
      }
    }
  `;

  const { saveEmployee } = await graphQLClient.request<SaveEmployeeResponse>(
    query,
    {
      employee,
    }
  );

  return saveEmployee.id;
};
