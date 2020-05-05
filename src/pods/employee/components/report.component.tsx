import React from 'react';
import { Formik, Form } from 'formik';
import { SelectComponent } from 'common/components';
import * as classes from './report.styles';
import { CommandFooterComponent } from 'common-app/command-footer';
import { cx } from 'emotion';

interface Props {
  className?: string;
  onCancel: () => void;
  onGenerateExcel: () => void;
}

export const ReportComponent: React.FunctionComponent<Props> = ({
  className,
  onCancel,
  onGenerateExcel,
}) => {
  return (
    <Formik
      initialValues={{}}
      enableReinitialize={true}
      onSubmit={onGenerateExcel}
    >
      {({ values }) => (
        <Form className={cx(classes.form, className)}>
          <SelectComponent
            name="month"
            label="Mes"
            items={[]}
            disabled
            className={classes.month}
          />
          <SelectComponent
            name="year"
            label="Año"
            items={[]}
            disabled
            className={classes.year}
          />
          <CommandFooterComponent
            onCancel={onCancel}
            className={classes.commands}
            labels={{ saveButton: 'Generar', cancelButton: 'Cancelar' }}
          />
        </Form>
      )}
    </Formik>
  );
};
