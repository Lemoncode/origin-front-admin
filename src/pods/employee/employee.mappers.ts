import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

const mapProjectSummaryFromApiToVm = (
  projectSummary: apiModel.EmployeeProject
): viewModel.EmployeeProject => ({
  ...projectSummary,
});

const mapProjectSummaryListFromApiToVm = (
  projectSummary: apiModel.EmployeeProject[]
): viewModel.EmployeeProject[] =>
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
  projectSummary: viewModel.EmployeeProject
): apiModel.EmployeeProject => ({
  id: projectSummary.id,
  isAssigned: projectSummary.isAssigned,
});

export const mapProjectSummaryListFromVmToApi = (
  projectSummary: viewModel.EmployeeProject[]
): apiModel.EmployeeProject[] =>
  mapToCollection(projectSummary, mapProjectSummaryFromVmToApi);
