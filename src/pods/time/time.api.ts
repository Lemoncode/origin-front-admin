import { Project } from './time.vm';
import { mockData } from './time.mock';

// TODO: Pending to implement real API
const mockProjects: Project[] = mockData;

export const getProjects = (): Promise<Project[]> => {
  const promise = new Promise<Project[]>(resolve => {
    setTimeout(() => {
      resolve(mockProjects);
    }, 2000);
  });

  return promise;
};
