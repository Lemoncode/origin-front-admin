import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

const mapProjectSummaryFromApiToVm = (
  project: apiModel.Project,
  employeeProjectList: apiModel.EmployeeProject[]
): viewModel.EmployeeProject => {
  const employeeProject = employeeProjectList
    ? employeeProjectList.find(ep => ep.id === project.id)
    : viewModel.createEmptyEmployeeProject();
  return {
    ...project,
    isAssigned: employeeProject?.isAssigned,
  };
};

const mapProjectSummaryListFromApiToVm = (
  project: apiModel.Project[],
  employeeProject: apiModel.EmployeeProject[]
): viewModel.EmployeeProject[] =>
  mapToCollection(project, p =>
    mapProjectSummaryFromApiToVm(p, employeeProject)
  );

export const mapEmployeeFromApiToVm = (
  employee: apiModel.Employee,
  projects: apiModel.Project[]
): viewModel.Employee => {
  return Boolean(employee)
    ? {
        ...employee,
        projects: mapProjectSummaryListFromApiToVm(projects, employee.projects),
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
