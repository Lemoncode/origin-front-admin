import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import { mapProjectListAmToVm } from './time.mapper';
import {
  replaceAssignmentInProject,
  getCountersFromProject,
} from './time.business';
import * as api from './time.api';
import * as VM from './time.vm';

export const useProjects = (): {
  projects: VM.Project[];
  updateProject: (nameProject: string, assignment: VM.Assignment) => void;
  counters: VM.Counter[];
} => {
  const [projects, setProjects] = React.useState<VM.Project[]>([]);
  const [counters, setCounters] = React.useState<VM.Counter[]>([]);

  React.useEffect(() => {
    trackPromise(
      api
        .getProjects()
        .then(mapProjectListAmToVm)
        .then(setProjects)
    );
  }, []);

  const updateProject = (nameProject: string, assignment: VM.Assignment) => {
    const projectsToUpdate = projects.map(project =>
      replaceAssignmentInProject(project, nameProject, assignment)
    );

    setProjects(projectsToUpdate);
  };

  React.useEffect(() => {
    if (projects.length > 0) {
      const dates = projects[0].assignments.map(assignment => assignment.date);
      setCounters(getCountersFromProject(dates, projects));
    }
  }, [projects]);

  return {
    projects,
    updateProject,
    counters,
  };
};
