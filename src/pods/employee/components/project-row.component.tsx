import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import Checkbox from '@material-ui/core/Checkbox';
import { ProjectSummary } from '../employee.vm';

interface RowProps extends RowRendererProps<ProjectSummary> {
  onChangeProject: (project: ProjectSummary) => void;
}

export const EmployeeRowComponent: React.FunctionComponent<RowProps> = ({
  row,
  onChangeProject,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox
          color="primary"
          onChange={(_, checked) =>
            onChangeProject({
              ...row,
              isAssigned: checked,
            })
          }
          checked={row.isAssigned}
        />
      </CellComponent>
      <CellComponent>{row.projectName}</CellComponent>
    </RowComponent>
  );
};
