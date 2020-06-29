import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import Checkbox from '@material-ui/core/Checkbox';
import { ProjectEmployee } from '../project.vm';

interface RowProps extends RowRendererProps<ProjectEmployee> {
  onChangeEmployee: (employee: ProjectEmployee) => void;
}

export const ProjectRowComponent: React.FunctionComponent<RowProps> = ({
  row,
  onChangeEmployee,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox
          color="primary"
          onChange={(_, checked) =>
            onChangeEmployee({
              ...row,
              isAssigned: checked,
            })
          }
          checked={row.isAssigned}
        />
      </CellComponent>
      <CellComponent>{row.name}</CellComponent>
    </RowComponent>
  );
};
