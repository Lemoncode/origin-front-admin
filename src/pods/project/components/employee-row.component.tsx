import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import Checkbox from '@material-ui/core/Checkbox';
import { ProjectEmployee } from '../project.vm';

type Props = RowRendererProps<ProjectEmployee>;

export const ProjectRowComponent: React.FunctionComponent<Props> = ({
  row,
}) => {
  return (
    <RowComponent>
      <CellComponent>
        <Checkbox checked={row.isAssigned} color="primary" />
      </CellComponent>
      <CellComponent>{row.name}</CellComponent>
    </RowComponent>
  );
};
