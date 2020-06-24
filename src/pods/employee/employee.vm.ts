export interface Employee {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  temporalPassword?: string;
  projects: EmployeeProject[];
}

export interface EmployeeProject {
  id: string;
  isAssigned?: boolean;
  name: string;
}

export interface Project {
  id: string;
  isAssigned?: boolean;
  name: string;
}

export interface Report {
  month: string;
  year: string;
}

export const createEmptyEmployee = (): Employee => ({
  id: '',
  name: '',
  email: '',
  isActive: false,
  temporalPassword: '',
  projects: [],
});

export const createEmptyReport = (): Report => ({
  month: '',
  year: '',
});
