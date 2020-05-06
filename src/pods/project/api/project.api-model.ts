export interface Project {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  emplyees: ProloyeeSummary[];
}

export interface ProloyeeSummary {
  id: string;
  isAssigned?: boolean;
  employeeName: string;
}
