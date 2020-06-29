export interface Employee {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  temporalPassword?: string;
  projects?: EmployeeProject[];
}

export interface EmployeeProject {
  id: string;
  isAssigned?: boolean;
}

export interface Project {
  id: string;
  name: string;
}
