import React from 'react';
import { Formik, Form } from 'formik';
import { SelectComponent } from 'common/components';
import { monthList } from 'common/constants';
import { CommandFooterComponent } from 'common-app/command-footer';
import { cx } from 'emotion';
import * as classes from './report.styles';
import { formValidation } from './report.validations';
import { Report } from '../project.vm';

interface Props {
  report: Report;
  onCancel: () => void;
  className: string;
  onGenerateExcel: (report: Report) => void;
}

export const ReportComponent: React.FunctionComponent<Props> = ({
  report,
  onGenerateExcel,
  onCancel,
  className,
}) => {
  return (
    <Formik
      initialValues={report}
      enableReinitialize={true}
      onSubmit={onGenerateExcel}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={cx(classes.form, className)}>
          <SelectComponent
            name="month"
            label="Mes"
            items={monthList}
            className={classes.month}
          />
          <SelectComponent
            name="year"
            label="Año"
            items={[
              {
                id: '2020',
                name: '2020',
              },
            ]}
            className={classes.year}
          />
          <CommandFooterComponent
            onCancel={onCancel}
            labels={{ saveButton: 'Generar', cancelButton: 'Cancelar' }}
            className={classes.commands}
          />
        </Form>
      )}
    </Formik>
  );
};
