import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/employee.api-model';
import * as viewModel from './employee.vm';

const mapProjectSummaryFromApiToVm = (
  projectSummary: apiModel.ProjectSummary
): viewModel.ProjectSummary => ({
  ...projectSummary,
});

export const mapProjectSummaryListFromApiToVm = (
  projectSummary: apiModel.ProjectSummary[]
): viewModel.ProjectSummary[] =>
  mapToCollection(projectSummary, ps => mapProjectSummaryFromApiToVm(ps));
