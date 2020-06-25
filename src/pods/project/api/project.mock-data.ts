import { Project, ProjectEmployee } from './project.api-model';

const mockEmployeeSummaryList: ProjectEmployee[] = [
  {
    id: '1',
    isAssigned: true,
  },
  {
    id: '2',
    isAssigned: false,
  },
  {
    id: '3',
    isAssigned: false,
  },
  {
    id: '4',
    isAssigned: true,
  },
];

export const mockProject: Project = {
  id: '1',
  name: 'Nombre',
  isActive: true,
  comments: 'Comentario',
  externalId: '1234',
  employees: mockEmployeeSummaryList,
};
