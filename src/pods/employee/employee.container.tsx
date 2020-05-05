import React from 'react';
import { EmployeeComponent } from './employee.component';
import { ProjectSummary } from './employee.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { getProjectSummary } from './api';
import { mapProjectSummaryListFromApiToVm } from './employee.mappers';
import { useParams } from 'react-router-dom';
import { isEditModeHelper } from 'common/helpers';

export const EmployeeContainer: React.FunctionComponent = () => {
  const { id } = useParams();
  const [projectSummaryList, setProjectSummaryList] = React.useState<
    ProjectSummary[]
  >([]);
  const { showMessage } = useSnackbarContext();

  const onLoadProjectSummary = async () => {
    try {
      const apiEmployeeSummary = await trackPromise(getProjectSummary());
      const viewModelEmployeeSummary = mapProjectSummaryListFromApiToVm(
        apiEmployeeSummary
      );
      setProjectSummaryList(viewModelEmployeeSummary);
    } catch (error) {
      error &&
        showMessage('Ha ocurrido un error al cargar los proyectos', 'error');
    }
  };

  const handleCancel = () => {
    history.back();
  };

  React.useEffect(() => {
    onLoadProjectSummary();
  }, []);

  return (
    <EmployeeComponent
      projectSummaryList={projectSummaryList}
      isEditMode={isEditModeHelper(id)}
      onCancel={handleCancel}
    />
  );
};
