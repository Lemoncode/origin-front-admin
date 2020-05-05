import { Employee, ProjectSummary } from './employee.api-model';

const mockProjectSummaryList: ProjectSummary[] = [
  {
    id: '1',
    isAssigned: true,
    employeeName: 'Mapfre',
  },
  {
    id: '2',
    isAssigned: false,
    employeeName: 'Bankia',
  },
  {
    id: '3',
    isAssigned: false,
    employeeName: 'Vacaciones',
  },
  {
    id: '4',
    isAssigned: true,
    employeeName: 'Baja',
  },
];

export const mockEmployee: Employee = {
  id: '1',
  name: 'Prueba Nombre',
  email: 'prueba@email.com',
  isActive: true,
  temporalKey: 'clave',
  projects: mockProjectSummaryList,
};
