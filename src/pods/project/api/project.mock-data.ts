import { Project, EmployeeSummary } from './project.api-model';

const mockEmployeeSummaryList: EmployeeSummary[] = [
  {
    id: '1',
    employeeId: 'Daniel Perez',
    isAssigned: true,
  },
  {
    id: '2',
    employeeId: 'Jose Sanchez',
    isAssigned: false,
  },
  {
    id: '3',
    employeeId: 'Javier Benitez',
    isAssigned: false,
  },
  {
    id: '4',
    employeeId: 'María Peña',
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
