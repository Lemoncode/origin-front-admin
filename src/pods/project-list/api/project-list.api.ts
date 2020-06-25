import { graphQLClient } from 'core/api';
import { Project } from './project-list.api-model';

interface GetProjectListReponse {
  projects: Project[];
}

export const getProjectList = async (): Promise<Project[]> => {
  const query = `
    query {
      projects {
        id
        isActive
        code
        name
        lastDateIncurred
        creationDate
      }
    }
  `;
  const { projects } = await graphQLClient.request<GetProjectListReponse>(
    query
  );
  return projects;
};

interface DeleteProjectResponse {
  deleteProject: boolean;
}

export const deleteProject = async (id: string): Promise<boolean> => {
  const query = `
    mutation {
      deleteProject(id: "${id}")
    }
  `;
  const { deleteProject } = await graphQLClient.request<DeleteProjectResponse>(
    query
  );
  return deleteProject;
};
