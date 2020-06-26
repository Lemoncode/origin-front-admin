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
  name: string;
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

export const createEmptyProjectEmployee = (): ProjectEmployee => ({
  id: '',
  name: '',
  isAssigned: false,
});
