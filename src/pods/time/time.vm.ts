export interface Project {
  name: string;
  assignments: Assignment[];
}

export interface Assignment {
  date: string;
  hours: string;
}

export type Counter = Assignment;
