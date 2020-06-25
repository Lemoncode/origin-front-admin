import { Project, Employee } from './project.api-model';
import { graphQLClient } from 'core/api';

interface GetProjectResponse {
  project: Project;
}

export const getProjectById = async (id: string): Promise<Project> => {
  const query = `
    query {
      project(id: "${id}") {
        id
        name
        isActive
        externalId
        comments
        employees {
          id
          isAssigned
        }
      }
    }
  `;
  const { project } = await graphQLClient.request<GetProjectResponse>(query);

  return project;
};

interface GetEmployeeListResponse {
  employees: Employee[];
}

export const getEmployees = async (): Promise<Employee[]> => {
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
