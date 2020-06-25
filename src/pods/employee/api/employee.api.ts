import { Employee, EmployeeProject, Project } from './employee.api-model';
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
        projects {
          id
          isAssigned
        }
      }
    }
  `;

  const { employee } = await graphQLClient.request<GetEmployeeResponse>(query);

  return employee;
};

interface GetProjectListResponse {
  projects: Project[];
}

export const getProjects = async (): Promise<Project[]> => {
  const query = `
    query {
      projects {
        id
        name
      }
    }
    `;
  const { projects } = await graphQLClient.request<GetProjectListResponse>(
    query
  );
  return projects;
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

export const saveEmployeeProjectList = async (
  id: string,
  employeeProjectList: EmployeeProject[]
): Promise<void> => {
  const query = `mutation($employeeProjectList: [EmployeeProjectInput!]!) {
    saveEmployeeProjectList(
      id: "${id}",
      employeeProjectList: $employeeProjectList,
    ) {
      id
    }
  }`;

  await graphQLClient.request(query, { employeeProjectList });
};
