import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik';
import { SelectComponent } from 'common/components';
import * as classes from './report.styles';
import { CommandFooterComponent } from 'common-app/command-footer';

export const ReportComponent: React.FunctionComponent = () => {
  return (
    <Formik
      initialValues={{}}
      enableReinitialize={true}
      onSubmit={console.log}
      validate={Promise.resolve}
    >
      {({ values }) => (
        <Form className={classes.form}>
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
            onCancel={console.log}
            className={classes.commands}
            labels={{ saveButton: 'Generar', cancelButton: 'Cancelar' }}
          />
        </Form>
      )}
    </Formik>
  );
};
