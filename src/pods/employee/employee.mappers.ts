import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

const mapProjectSummaryFromApiToVm = (
  projectSummary: apiModel.ProjectSummary
): viewModel.ProjectSummary => ({
  ...projectSummary,
});

const mapProjectSummaryListFromApiToVm = (
  projectSummary: apiModel.ProjectSummary[]
): viewModel.ProjectSummary[] =>
  mapToCollection(projectSummary, ps => mapProjectSummaryFromApiToVm(ps));

export const mapEmployeeFromApiToVm = (
  employee: apiModel.Employee
): viewModel.Employee => {
  return Boolean(employee)
    ? {
        ...employee,
        projects: mapProjectSummaryListFromApiToVm(employee.projects),
      }
    : viewModel.createEmptyEmployee();
};

export const mapEmployeeFromVmToApi = (
  employee: viewModel.Employee
): apiModel.Employee => ({
  ...employee,
});

const mapProjectSummaryFromVmToApi = (
  projectSummary: viewModel.ProjectSummary
): apiModel.ProjectSummary => ({
  id: projectSummary.id,
  isAssigned: projectSummary.isAssigned,
  projectName: projectSummary.projectName,
});

export const mapProjectSummaryListFromVmToApi = (
  projectSummary: viewModel.ProjectSummary[]
): apiModel.ProjectSummary[] =>
  mapToCollection(projectSummary, mapProjectSummaryFromVmToApi);
