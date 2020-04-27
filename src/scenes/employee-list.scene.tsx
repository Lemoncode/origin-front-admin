import React from 'react';
import { AppLayout } from 'layouts';
import { EmployeeListComponent } from 'pods/employee-list';

export const EmployeeListScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <EmployeeListComponent />
    </AppLayout>
  );
};
