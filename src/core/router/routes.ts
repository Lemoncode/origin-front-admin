interface BaseRoutes {
  root: string;
  login: string;
  time: string;
  submoduleList: string;
  projects: string;
  editProject: string;
  employees: string;
  editEmployee: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  login: '/login',
  time: '/time',
  submoduleList: '/submodule-list',
  projects: './projects',
  editProject: './projects/:id',
  employees: './employees',
  editEmployee: './employees/:id',
};

type Routes = Omit<BaseRoutes, 'editProject' | 'editEmployee'>;

export const routes: Routes = {
  ...baseRoutes,
};
