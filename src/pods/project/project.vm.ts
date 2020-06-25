export interface Project {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  employees: EmployeeSummary[];
}

export interface EmployeeSummary {
  id: string;
  isAssigned?: boolean;
  employeeName: string;
}

export interface Report {
  month: string;
  year: string;
}

export const createEmptyProject = (): Project => ({
  id: '',
  name: '',
  externalId: '',
  comments: '',
  isActive: false,
  employees: [],
});

export const createEmptyReport = (): Report => ({
  month: '',
  year: '',
});
