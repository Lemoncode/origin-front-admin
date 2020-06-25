import React from 'react';
import { ProjectComponent } from './project.component';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from 'common/components';
import { getProjectById, getEmployees } from './api';
import { trackPromise } from 'react-promise-tracker';
import { mapProjectFromApiToVm } from './project.mapper';
import {
  Project,
  createEmptyProject,
  Report,
  createEmptyReport,
} from './project.vm';
import { isEditModeHelper } from 'common/helpers';

export const ProjectContainer: React.FunctionComponent = () => {
  const { id } = useParams();
  const [project, setProject] = React.useState<Project>(createEmptyProject());
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [report, setReport] = React.useState<Report>(createEmptyReport());
  const { showMessage } = useSnackbarContext();

  const onLoadProject = async () => {
    try {
      const [apiEmployees, apiProject] = await trackPromise(
        Promise.all([getEmployees(), getProjectById(id)])
      );
      const viewModelProject = mapProjectFromApiToVm(apiProject, apiEmployees);
      setProject(viewModelProject);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar el proyecto', 'error');
    }
  };

  const handleSave = (Project: Project) => {
    console.log('Guardado');
  };

  const handleCancel = () => {
    history.back();
  };

  const handleGenerateExcel = (report: Report) => {
    // Pending to create real implementation
    console.log('Excel creado');
  };

  React.useEffect(() => {
    const isEditMode = isEditModeHelper(id);
    setIsEditMode(isEditMode);
    if (isEditMode) {
      onLoadProject();
    }
  }, []);

  return (
    <ProjectComponent
      isEditMode={isEditMode}
      project={project}
      report={report}
      onSave={handleSave}
      onCancel={handleCancel}
      onGenerateExcel={handleGenerateExcel}
    />
  );
};
