import { Employee } from './employee-list.api-model';
import { mockEmployeeList } from './employee-list.mock-data';

export const getEmployeeList = async (): Promise<Employee[]> => {
  return mockEmployeeList;
};
