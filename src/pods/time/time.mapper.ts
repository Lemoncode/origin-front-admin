import { Project } from './time.vm';

export const mapProjectAmToVm = (project: Project): Project =>
  Boolean(project) && { ...project };

export const mapProjectListAmToVm = (projects: Project[]): Project[] =>
  Boolean(projects) && projects.map(mapProjectAmToVm);
