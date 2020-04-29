import { Employee } from './employee-list.api-model';

export const mockEmployeeList: Employee[] = [
  {
    id: '1',
    active: true,
    name: 'Daniel Perez',
    email: 'daniel.perez@empresa.com',
    lastDateIncurred: '02/02/2020',
  },
  {
    id: '2',
    active: true,
    name: 'Jose Gomez',
    email: 'jose.gomez@empresa.com',
    lastDateIncurred: '05/02/2020',
  },
  {
    id: '3',
    active: false,
    name: 'Manuel Ruiz',
    email: 'manuel.ruiz@empresa.com',
    lastDateIncurred: '06/02/2020',
  },
  {
    id: '4',
    active: true,
    name: 'Ramón Gomez',
    email: 'ramon.gomez@empresa.com',
    lastDateIncurred: '02/05/2020',
  },
  {
    id: '5',
    active: false,
    name: 'María Lopez',
    email: 'maria.lopez@empresa.com',
    lastDateIncurred: '05/08/2020',
  },
  {
    id: '6',
    active: true,
    name: 'Manuel Ortiz',
    email: 'manuel.ortiz@empresa.com',
    lastDateIncurred: '06/06/2020',
  },
  {
    id: '7',
    active: false,
    name: 'David Martos',
    email: 'david.martos@empresa.com',
    lastDateIncurred: '14/08/2020',
  },
  {
    id: '8',
    active: true,
    name: 'Luz Roca',
    email: 'luz.roca@empresa.com',
    lastDateIncurred: '20/06/2020',
  },
];
