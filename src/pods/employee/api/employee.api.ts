import { ProjectSummary } from './employee.api-model';
import { mockProjectSummaryList } from './employee.mock-data';

const projectList = [...mockProjectSummaryList];

export const getProjectSummary = async (): Promise<ProjectSummary[]> => {
  return projectList;
};
