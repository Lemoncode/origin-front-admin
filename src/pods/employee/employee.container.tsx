import React from 'react';
import { EmployeeComponent } from './employee.component';
import { useHistory } from 'react-router-dom';
import { ProjectSummary } from './employee.vm';
import { useSnackbarContext } from 'common/components';
import { trackPromise } from 'react-promise-tracker';
import { getProjectSummary } from './api';
import { mapProjectSummaryListFromApiToVm } from './employee.mappers';

export const EmployeeContainer: React.FunctionComponent = () => {
  const [projectSummaryList, setProjectSummaryList] = React.useState<
    ProjectSummary[]
  >([]);
  const history = useHistory();
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

  React.useEffect(() => {
    onLoadProjectSummary();
  }, []);

  return <EmployeeComponent projectSummaryList={projectSummaryList} />;
};
