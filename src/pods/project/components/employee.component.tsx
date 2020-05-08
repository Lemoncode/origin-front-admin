import React from 'react';
import { EmployeeSummary } from '../project.vm';

interface Props {
  employeeSummaryList: EmployeeSummary[];
  onCancel: () => void;
}

export const EmployeeComponent: React.FunctionComponent<Props> = ({
  employeeSummaryList,
  onCancel,
}) => {
  return <h1>Hello Employee Component</h1>;
};
