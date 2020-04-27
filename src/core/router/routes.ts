interface BaseRoutes {
  root: string;
  login: string;
  submoduleList: string;
  projects: string;
  editProject: string;
  employees: string;
  editEmployee: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  login: '/login',
  submoduleList: '/submodule-list',
  projects: '/projects',
  editProject: '/projects/:id',
  employees: '/employees',
  editEmployee: '/employees/:id',
};

type Routes = Omit<BaseRoutes, 'editProject' | 'editEmployee'>;

export const routes: Routes = {
  ...baseRoutes,
};
