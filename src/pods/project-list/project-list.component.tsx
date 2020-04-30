import React from 'react';
import {
  TableContainer,
  RowRendererProps,
  useSearchBar,
} from 'common/components';
import { Project } from './project-list.vm';
import { ProjectRowComponent } from './components';

interface Props {
  projectList: Project[];
}

export const ProjectListComponent: React.FunctionComponent<Props> = ({
  projectList,
}) => {
  const { filteredList, onSearch, search } = useSearchBar(projectList, [
    'projectName',
  ]);
  return (
    <TableContainer
      columns={[
        'Activo',
        'Código',
        'Proyecto',
        'Fecha Ultimo incurrido',
        'Fecha creación',
      ]}
      rows={filteredList}
      rowRenderer={(rowProps: RowRendererProps<Project>) => (
        <ProjectRowComponent {...rowProps} />
      )}
      labels={{
        searchPlaceholder: 'Buscar proyecto',
        createButton: 'Nuevo proyecto',
      }}
      enableSearch={true}
      search={search}
      onSearch={onSearch}
      enablePagination={true}
      pageSize={5}
    />
  );
};
