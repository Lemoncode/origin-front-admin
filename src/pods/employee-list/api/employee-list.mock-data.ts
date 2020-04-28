import { Employee } from './employee-list.api-model';

export const mockEmployeeList: Employee[] = [
  {
    id: '1',
    active: true,
    name: 'Daniel Perez',
    email: 'daniel.perez@empresa.com',
    lastDateIncurred: '2020-02-02T00:00:00',
  },
  {
    id: '2',
    active: true,
    name: 'Jose Gomez',
    email: 'jose.gomez@empresa.com',
    lastDateIncurred: '2020-02-05T00:00:00',
  },
  {
    id: '3',
    active: false,
    name: 'Manuel Ruiz',
    email: 'jose.gomez@empresa.com',
    lastDateIncurred: '2020-02-06T00:00:00',
  },
];
