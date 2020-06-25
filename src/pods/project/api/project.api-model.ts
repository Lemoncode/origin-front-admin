export interface Project {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  employees: ProjectEmployee[];
}

export interface ProjectEmployee {
  id: string;
  isAssigned?: boolean;
}

export interface Employee {
  id: string;
  name: string;
}
