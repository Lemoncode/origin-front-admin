import React from 'react';
import { ProjectComponent } from './project.component';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from 'common/components';
import {
  getProjectById,
  getEmployees,
  saveProject,
  saveProjectEmployeeList,
} from './api';
import { trackPromise } from 'react-promise-tracker';
import {
  mapProjectFromApiToVm,
  mapProjectFromVmToApi,
  mapProjectEmployeeListFromVmToApi,
} from './project.mapper';
import {
  Project,
  createEmptyProject,
  Report,
  createEmptyReport,
  ProjectEmployee,
} from './project.vm';
import { isEditModeHelper } from 'common/helpers';
import { useHistory } from 'react-router';
import { routes, EditParams } from 'core/router';

export const ProjectContainer: React.FunctionComponent = () => {
  const params = useParams<EditParams>();
  const [project, setProject] = React.useState<Project>(createEmptyProject());
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [report, setReport] = React.useState<Report>(createEmptyReport());
  const { showMessage } = useSnackbarContext();
  const history = useHistory();

  const onLoadProject = async () => {
    try {
      const [apiEmployees, apiProject] = await trackPromise(
        Promise.all([getEmployees(), getProjectById(params.id)])
      );
      const viewModelProject = mapProjectFromApiToVm(apiProject, apiEmployees);
      setProject(viewModelProject);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar el proyecto', 'error');
    }
  };

  const handleSuccessSaveProject = (id: string, newProject: Project) => {
    if (id) {
      showMessage('Proyecto guardado con éxito', 'success');
      setProject(newProject);
      history.push(routes.editProject(id));
    } else {
      showMessage('Ha ocurrido un error al guardar el empleado', 'error');
    }
  };

  const handleSaveProject = async (project: Project) => {
    try {
      const apiProject = mapProjectFromVmToApi(project);
      const id = await trackPromise(saveProject(apiProject));
      handleSuccessSaveProject(id, project);
    } catch (error) {
      error && showMessage(error.message, 'error');
    }
  };

  const handleSaveEmployeeSelection = async (
    proyectEmployeeList: ProjectEmployee[]
  ) => {
    if (params.id) {
      try {
        const apiEmployeeProjectList = mapProjectEmployeeListFromVmToApi(
          proyectEmployeeList
        );
        await trackPromise(
          saveProjectEmployeeList(params.id, apiEmployeeProjectList)
        );
        setProject({ ...project, employees: proyectEmployeeList });
        showMessage('Se actualizó con éxito', 'success');
      } catch (error) {
        error && showMessage('Ha ocurrido un error al guardar', 'error');
      }
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleGenerateExcel = (report: Report) => {
    // Pending to create real implementation
    console.log('Excel creado');
  };

  React.useEffect(() => {
    const isEditMode = isEditModeHelper(params.id);
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
      onSaveProject={handleSaveProject}
      onSaveEmployeeSelection={handleSaveEmployeeSelection}
      onCancel={handleCancel}
      onGenerateExcel={handleGenerateExcel}
    />
  );
};
