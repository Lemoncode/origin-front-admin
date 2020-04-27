import React from 'react';
import { AppLayout } from 'layouts';
import { EmployeeComponent } from 'pods/employee';

export const EmployeeScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <EmployeeComponent />
    </AppLayout>
  );
};
