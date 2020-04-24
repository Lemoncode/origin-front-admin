interface BaseRoutes {
  root: string;
  login: string;
  time: string;
}

const baseRoutes: BaseRoutes = {
  root: '/',
  login: '/login',
  time: '/time',
};

type Routes = Omit<BaseRoutes, ''>;

export const routes: Routes = {
  ...baseRoutes,
};
