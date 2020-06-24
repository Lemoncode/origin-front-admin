import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

const mapProjectSummaryFromApiToVm = (
  projectSummary: apiModel.EmployeeProject,
  projects: apiModel.Project[]
): viewModel.EmployeeProject => ({
  ...projectSummary,
  name: projects.find(p => p.id === projectSummary.id).name,
});

const mapProjectSummaryListFromApiToVm = (
  projectSummary: apiModel.EmployeeProject[],
  projects: apiModel.Project[]
): viewModel.EmployeeProject[] =>
  mapToCollection(projectSummary, ps =>
    mapProjectSummaryFromApiToVm(ps, projects)
  );

export const mapEmployeeFromApiToVm = (
  employee: apiModel.Employee,
  projects: apiModel.Project[]
): viewModel.Employee => {
  return Boolean(employee)
    ? {
        ...employee,
        projects: mapProjectSummaryListFromApiToVm(employee.projects, projects),
      }
    : viewModel.createEmptyEmployee();
};

export const mapEmployeeFromVmToApi = (
  employee: viewModel.Employee
): apiModel.Employee => ({
  id: employee.id,
  name: employee.name,
  email: employee.email,
  isActive: employee.isActive,
  temporalPassword: employee.temporalPassword,
});

const mapEmployeeProjectFromVmToApi = (
  employeeProject: viewModel.EmployeeProject
): apiModel.EmployeeProject => ({
  id: employeeProject.id,
  isAssigned: employeeProject.isAssigned,
});

export const mapEmployeeProjectListFromVmToApi = (
  employeeProjectList: viewModel.EmployeeProject[]
): apiModel.EmployeeProject[] =>
  mapToCollection(employeeProjectList, mapEmployeeProjectFromVmToApi);
