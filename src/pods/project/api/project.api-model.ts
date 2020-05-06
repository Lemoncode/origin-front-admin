export interface Project {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  emplyees: EmployeeSummary[];
}

export interface EmployeeSummary {
  id: string;
  isAssigned?: boolean;
  employeeName: string;
}
