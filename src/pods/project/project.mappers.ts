import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

const mapEmployeeSummaryFromApiToVm = (
  employee: apiModel.Employee,
  projectEmployeeList: apiModel.ProjectEmployee[]
): viewModel.ProjectEmployee => {
  const projectEmployee = projectEmployeeList
    ? projectEmployeeList.find(pe => pe.id === employee.id)
    : viewModel.createEmptyProjectEmployee();
  return {
    ...employee,
    isAssigned: projectEmployee?.isAssigned,
  };
};

const mapEmployeeSummaryListFromApiToVm = (
  employees: apiModel.Employee[],
  projectEmployees: apiModel.ProjectEmployee[]
): viewModel.ProjectEmployee[] =>
  mapToCollection(employees, e =>
    mapEmployeeSummaryFromApiToVm(e, projectEmployees)
  );

export const mapProjectFromApiToVm = (
  project: apiModel.Project,
  employees: apiModel.Employee[]
): viewModel.Project => {
  return Boolean(project)
    ? {
        ...project,
        employees: mapEmployeeSummaryListFromApiToVm(
          employees,
          project.employees
        ),
      }
    : viewModel.createEmptyProject();
};

export const mapProjectFromVmToApi = (
  project: viewModel.Project
): apiModel.Project => {
  return Boolean(project)
    ? {
        id: project.id,
        name: project.name,
        isActive: project.isActive,
        externalId: project.externalId,
        comments: project.comments,
      }
    : viewModel.createEmptyProject();
};

const mapProjectEmployeeFromVmToApi = (
  projectEmployee: viewModel.ProjectEmployee
): apiModel.ProjectEmployee => ({
  id: projectEmployee.id,
  isAssigned: projectEmployee.isAssigned,
});

export const mapProjectEmployeeListFromVmToApi = (
  projectEmployeeList: viewModel.ProjectEmployee[]
): apiModel.ProjectEmployee[] =>
  mapToCollection(projectEmployeeList, mapProjectEmployeeFromVmToApi);
