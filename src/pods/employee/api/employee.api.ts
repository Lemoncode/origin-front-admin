import { Employee, ProjectSummary } from './employee.api-model';
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
        projects {
          id
          isAssigned
          projectName
        }
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

export const saveProjectSummary = async (
  id: string,
  projectSummaryList: ProjectSummary[]
): Promise<void> => {
  const query = `mutation($projectSummaryList: [ProjectSummaryInput!]!) {
    saveProjectSummaryList(
      id: "${id}",
      projectSummaryList: $projectSummaryList,
    ) {
      id
    }
  }`;

  await graphQLClient.request(query, { projectSummaryList });
};
