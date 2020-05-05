export interface Employee {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  temporalKey: string;
  projects: ProjectSummary[];
}

export interface ProjectSummary {
  id: string;
  isAssigned: boolean;
  employeeName: string;
}

export const createEmptyEmployee = (): Employee => ({
  id: '',
  name: '',
  email: '',
  isActive: false,
  temporalKey: '',
  projects: [],
});
