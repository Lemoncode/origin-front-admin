import { Project, Employee, ProjectEmployee } from './project.api-model';
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

interface SaveProjectResponse {
  saveProject: Project;
}

export const saveProject = async (project: Project): Promise<string> => {
  const query = `
    mutation($project: ProjectInput!) {
      saveProject(project: $project) {
        id
      }
    }
  `;

  const { saveProject } = await graphQLClient.request<SaveProjectResponse>(
    query,
    {
      project,
    }
  );

  return saveProject.id;
};

export const saveProjectEmployeeList = async (
  id: string,
  projectEmployeeList: ProjectEmployee[]
): Promise<void> => {
  const query = `mutation($projectEmployeeList: [ProjectEmployeeInput!]!) {
    saveProjectEmployeeList(id: "${id}", projectEmployeeList: $projectEmployeeList,) {
      id
    }
  }
  `;

  await graphQLClient.request(query, { projectEmployeeList });
};
